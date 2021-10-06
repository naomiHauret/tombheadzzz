import { Show, mergeProps } from 'solid-js'
import { uiLabel, uiError } from './ui'
import { IFormFieldProps } from './types'
const FormField = (props: IFormFieldProps) => {
  const { theme, size, css, required, invalid, ...rest } = props
  props = mergeProps({ theme: 'default', size: 'default', css: '' }, props)

  return (
    <div class="flex flex-col">
      <label
        class={`flex flex-col ${uiLabel.color[props.theme]} ${uiLabel.textStyle[props.size]} `}
        id={`label-${props.inputId}`}
        for={props.inputId}
      >
        <div class={`${uiLabel.space[props.size]} flex items-baseline flex-wrap`}>
          <span
            classList={{
              'pie-2': props.required === false,
            }}
          >
            {props.label}
          </span>
          <Show when={props.required === false}>
            <span class="opacity-50 text-xs">(optional)</span>
          </Show>
        </div>
        {props.children}
      </label>
      <div></div>
      <Show when={props.error}>
        <label
          class={`block ${uiError.color[props.theme]} ${uiError.textStyle[props.size]} ${uiError.space[props.size]}`}
          id={`error-${props.inputId}`}
          for={props.inputId}
        >
          {props.error}
        </label>
      </Show>
    </div>
  )
}

export default FormField
