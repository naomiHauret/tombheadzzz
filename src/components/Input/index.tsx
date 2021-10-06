import { mergeProps } from 'solid-js'
import { ui } from './ui'
import { IInputProps } from './types'

const Input = (props: IInputProps) => {
  const { theme, size, css, required, invalid, ...rest } = props
  props = mergeProps({ theme: 'default', size: 'default', css: '' }, props)

  return (
    <input
      aria-required={props.required}
      aria-invalid={props.invalid}
      class={`disabled:cursor-not-allowed ${ui.color[props.theme]} ${ui.bg[props.theme]} ${
        ui.borderColor[props.theme]
      } ${ui.textStyle[props.size]} ${ui.space[props.size]} ${ui.radius[props.size]} ${ui.borderWidth[props.size]} ${
        ui.borderStyle[props.size]
      } ${props.css}`}
      {...rest}
    />
  )
}

export default Input
