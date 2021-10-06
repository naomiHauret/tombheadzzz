import { JSX } from 'solid-js'

export interface IDialogModalProps {
  visibility: boolean
  showLabel: boolean
  label: string
  children: JSX.Element
  handleClose: () => void
}
