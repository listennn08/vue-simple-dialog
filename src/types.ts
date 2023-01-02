export interface Options {
  theme: 'ios' | 'material'
  layoutClose: boolean
}

export interface Params {
  mount?: string
  title?: string
  message: string
  button?: Partial<{
    yes: string
    no: string
  }>
  callback?: (confirm: boolean) => void
}

export type ConfirmFn = (params: Params) => void
