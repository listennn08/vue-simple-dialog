import { defineComponent, h, withModifiers } from 'vue'

const prefiex = 'sd-'

export const Confirm = defineComponent({
  props: {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    layoutClose: {
      type: Boolean,
      default: false,
    },
    okBtnText: {
      type: String,
      default: 'ok',
    },
    cancelBtnText: {
      type: String,
      default: 'cancel',
    },
    callback: {
      type: Function,
    },
  },
  setup(props, { emit }) {
    const { title, message, layoutClose, okBtnText, cancelBtnText, callback } =
      props

    function onClick(decision: boolean, cb?: Function) {
      return async function (event: Event) {
        if (cb && typeof cb === 'function') {
          await new Promise((res) => {
            cb(decision)
            res(true)
          })
        }
        emit('update:show', false)
      }
    }

    const clickLayoutToClose = () => layoutClose && emit('update:show', false)
    const titleItem = h('h3', null, title)
    const okButton = h(
      'button',
      {
        class: `${prefiex}btn`,
        onClick: onClick(true, callback),
      },
      okBtnText,
    )
    const cancelButton = h(
      'button',
      {
        class: `${prefiex}btn`,
        onClick: onClick(false, callback),
      },
      cancelBtnText,
    )
    return () => {
      return h(
        'div',
        {
          class: `${prefiex}layer`,
          onClick: withModifiers(clickLayoutToClose, ['stop']),
        },
        h('div', { class: `${prefiex}container` }, [
          h('div', { class: `${prefiex}body` }, [
            title && titleItem,
            h('div', { class: `${prefiex}text` }, message),
          ]),
          h('div', { class: `${prefiex}footer` }, [okButton, cancelButton]),
        ]),
      )
    }
  },
})
