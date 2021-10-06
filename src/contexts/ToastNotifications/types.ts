import { JSX } from 'solid-js'

enum ENotificationType {
  info = 'info',
  pending = 'pending',
  success = 'success',
  error = 'error',
  warning = 'warning',
}

export interface INotificationMessage {
  title: string
  content: string | JSX.Element
  type: ENotificationType
}

export interface IToastNotificationsProvider {
  children: JSX.Element
}
