import { mergeProps } from 'solid-js'
import { ui } from './ui'
import { IButtonLinkProps, ICtaProps } from './types'

export function ButtonLink(props: IButtonLinkProps) {
  const { children, theme, size, css, childrenWrapperCss, ...rest } = props
  props = mergeProps({ theme: 'neutral', size: 'default', css: '', childrenWrapperCss: '', disabled: false }, props)
  const buttonClass = `${ui.textStyle[size]} ${ui.space[size]} ${ui.radius[size]} ${ui.borderWidth[size]} ${ui.borderStyle[size]} ${ui.bg[theme]} ${ui.borderColor[theme]}`
  return (
    <a class={`${buttonClass} ${css}`} {...rest}>
      <span class={`${ui.color[theme]} ${childrenWrapperCss} inline-flex z-2 relative`}>{children}</span>
    </a>
  )
}

export function Button(props: ICtaProps) {
  const { children, theme, size, css, childrenWrapperCss, disabled, loading, ...rest } = props
  props = mergeProps(
    { theme: 'neutral', size: 'default', css: '', childrenWrapperCss: '', disabled: false, loading: false },
    props,
  )
  return (
    <button
      disabled={props?.disabled === true || props.loading === true ? true : false}
      class={`cursor-pointer disabled:cursor-not-allowed ${ui.color[props.theme]} ${ui.bg[props.theme]} ${
        ui.borderColor[props.theme]
      } ${ui.textStyle[props.size]} ${ui.space[props.size]} ${ui.radius[props.size]} ${ui.borderWidth[props.size]} ${
        ui.borderStyle[props.size]
      } ${props.css}`}
      {...rest}
    >
      <span
        class={`${props.childrenWrapperCss} inline-flex z-2 relative`}
        classList={{
          'loader-cta': props.loading === true,
        }}
      >
        {props.children}
      </span>
    </button>
  )
}
