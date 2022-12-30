import type { App, InjectionKey } from 'vue'
import $confirm from './$confirm'
import './scss/index.scss'

export const confirm: InjectionKey<ConfirmFn> = Symbol()

function install(app: App, options?: Options) {
  const { Dialog, confirm: $$confirm } = $confirm(options)

  app.component('Dialog', Dialog)
  app.provide(confirm, $$confirm)
}

export default { install }
