export interface IOption {
  label: string
  value: string
}

export interface IInputSelectProps {
  theme: 'default'
  size: 'default'
  css: string
  required: boolean
  invalid: boolean
  placeholder: string
  options: IOption[]
}
