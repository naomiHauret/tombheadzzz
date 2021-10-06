import { JSX } from 'solid-js'

export interface IFormFieldProps {
  theme: 'default'
  size: 'default'
  css: string
  required: boolean
  invalid: boolean
  inputId: string
  error?: any
  label: string
  children: JSX.Element
}
