interface Options {
  theme: 'ios' | 'material'
  layoutClose: boolean
}

interface Params {
  mount?: string
  title?: string
  message: string
  button?: {
    yes: string
    no?: string
  }
  callback?: (confirm: boolean) => void
}

type ConfirmFn = (params: Params) => void
