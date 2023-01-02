import $confirm from './$confirm'
import './scss/index.scss'

import type { App, InjectionKey } from 'vue'
import type { ConfirmFn, Options } from './types'

export const confirm: InjectionKey<ConfirmFn> = Symbol()

function install(app: App, options?: Options) {
  const { Confirm, confirm: $$confirm } = $confirm(options)

  app.component('vue-simple-confirm', Confirm)
  app.provide(confirm, $$confirm)
}

export default { install }
