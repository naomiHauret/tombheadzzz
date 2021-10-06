import { For, mergeProps } from 'solid-js'
import { ui } from '@components/Input/ui'
import { IOption, IInputSelectProps } from './types'
// @ts-ignore
import styles from './index.module.css'

const InputSelect = (props: IInputSelectProps) => {
  const { theme, size, css, required, invalid, options, placeholder, ...rest } = props
  props = mergeProps({ theme: 'default', size: 'default', css: '' }, props)

  return (
    <div class={`relative ${styles.select} ${props.css}`}>
      <select
        aria-required={props.required}
        aria-invalid={props.invalid}
        class={`disabled:cursor-not-allowed appearance-none w-full ${ui.color[props.theme]} ${ui.bg[props.theme]} ${
          ui.borderColor[props.theme]
        } ${ui.textStyle[props.size]} ${ui.space[props.size]} ${ui.radius[props.size]} ${ui.borderWidth[props.size]} ${
          ui.borderStyle[props.size]
        }`}
        {...rest}
      >
        <option value="" disabled selected>
          {props.placeholder}
        </option>
        <For each={props.options}>{(option: IOption) => <option value={option.value}>{option.label}</option>}</For>
      </select>
    </div>
  )
}

export default InputSelect
