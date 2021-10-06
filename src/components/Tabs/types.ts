import { JSX } from 'solid-js'

export interface ITabGroupProps {
  class: string
  children: JSX.Element
}

export interface ITabListProps {
  label?: string
  children: JSX.Element
}

export interface ITabProps {
  isCurrentTab: boolean
  children: JSX.Element
  id: string
}

export interface ITabPanelProps {
  isCurrentTab: boolean
  children: JSX.Element
  id: string
}
