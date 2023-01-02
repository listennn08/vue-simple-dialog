import { ref, h, Teleport, type Component } from 'vue'
import { Confirm } from './components/confirm'
import { defaultTo } from './utils'
import type { ConfirmFn, Options, Params } from './types'

const defaultToEmpty = (v?: string) => defaultTo(v, '')

export default function (opts?: Options) {
  const options = Object.assign(
    {
      theme: 'ios',
      layoutClose: false,
    },
    opts,
  )
  const mount = ref('')
  const title = ref('')
  const show = ref(false)
  const message = ref('')
  const okBtnText = ref()
  const cancelBtnText = ref()
  let callback = (b: boolean) => {}

  const vnode = (): Component | null => {
    const confirmComp = h(Confirm, {
      class: options.theme,
      'onUpdate:show': (v: boolean) => (show.value = v),
      layoutClose: options.layoutClose,
      title: title.value,
      message: message.value,
      okBtnText: okBtnText.value,
      cancelBtnText: cancelBtnText.value,
      callback,
    })
    if (show.value) {
      if (mount.value) return h(Teleport, { to: mount.value }, confirmComp)
      return confirmComp
    }
    return null
  }

  const confirm: ConfirmFn = (params: Params) => {
    mount.value = defaultToEmpty(params.mount)
    title.value = defaultToEmpty(params.title)
    message.value = defaultToEmpty(params.message)
    okBtnText.value = defaultTo(params.button?.yes, undefined)
    cancelBtnText.value = defaultTo(params.button?.no, undefined)
    callback = defaultTo(params.callback, callback)

    show.value = true
  }

  return {
    Confirm: vnode,
    show,
    confirm,
  }
}
