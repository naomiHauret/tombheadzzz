import { JSX } from 'solid-js'

export interface IButtonProps {
  theme: 'primary' | 'secondary' | 'neutral'
  size: 'default' | 'lg'
  css?: string
  childrenWrapperCss?: string
  disabled?: boolean
  children: JSX.Element
}

export interface IButtonLinkProps extends IButtonProps {
  href: string
  target?: string
  rel?: string
}

export interface ICtaProps extends IButtonProps {
  loading?: boolean
  onClick: any
}
