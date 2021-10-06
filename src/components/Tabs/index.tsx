// @ts-ignore
import styles from './index.module.css'
import { ui } from '@components/Button/ui'
import { mergeProps } from 'solid-js'
import { ITabGroupProps, ITabListProps, ITabProps, ITabPanelProps } from './types'

export const TabGroup = (props: ITabGroupProps) => {
  props = mergeProps({ class: '' }, props)
  return (
    <div
      class={`${styles.tabGroup} text-base-min sm:text-base relative rounded-1 sm:rounded-2 pt-16 pb-7 px-8 xs:px-12 sm:pt-16 sm:pb-10 sm:px-24 border-1 border-neutral-100 border-opacity-20 ${props.class} `}
    >
      {props.children}
    </div>
  )
}

export const TabList = (props: ITabListProps) => {
  const { children, label, ...rest } = props
  return (
    <div
      class="absolute w-full px-3 sm:px-0 left-0 justify-center items-center flex top-0 transform -translate-y-1/2"
      role="tablist"
      aria-label={label}
      {...rest}
    >
      {children}
    </div>
  )
}

export const Tab = (props: ITabProps) => {
  const { children, isCurrentTab, ...rest } = props
  const themeInactive = `text-opacity-75 hover:text-opacity-100 ${ui.bg['neutral']} ${ui.color['neutral']} ${ui.borderColor['neutral']}`
  const themeActive = `${ui.bg['primary']} ${ui.color['primary']} ${ui.borderColor['primary']}`
  const tabClass = `${ui.textStyle['lg']} ${ui.space['lg']} ${ui.radius['lg']} ${ui.borderWidth['lg']} ${ui.borderStyle['lg']}`

  return (
    <button
      class={`${props.isCurrentTab ? themeActive : themeInactive} ${tabClass}`}
      role="tab"
      aria-selected={props.isCurrentTab}
      {...rest}
    >
      <span class="relative z-2">{children}</span>
    </button>
  )
}

export const TabPanel = (props: ITabPanelProps) => {
  const { children, isCurrentTab, ...rest } = props
  return (
    <div hidden={!props.isCurrentTab} role="tabpanel" tabindex={props.isCurrentTab ? '0' : '-1'} {...rest}>
      {children}
    </div>
  )
}
