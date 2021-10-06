export interface IInputProps {
  theme?: 'default'
  size?: 'default'
  css?: string
  required?: boolean
  invalid?: boolean
  id: string
  type: string
  name: string
  min?: string | number
  max?: string | number
  step?: string | number
  pattern?: string
  placeholder?: string
}
