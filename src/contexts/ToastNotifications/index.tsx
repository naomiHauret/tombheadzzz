import { Toaster, useToaster } from 'solid-headless'
import { createSignal, createEffect, onCleanup, createContext, useContext } from 'solid-js'
import { IToastNotificationsProvider, INotificationMessage } from './types'

const notifications = new Toaster<INotificationMessage>()
const ToastNotificationsContext = createContext()

export const ToastNotificationsProvider = (props: IToastNotificationsProvider) => {
  const notifs = useToaster(notifications)
  const [isOpen, setIsOpen] = createSignal(false)

  function createToast(message: INotificationMessage) {
    notifications.create(message)
  }

  function clearNotifs() {
    notifications.clear()
  }

  createEffect(() => {
    if (notifs().length > 0) {
      setIsOpen(true)
    }
  })

  return (
    <ToastNotificationsContext.Provider
      value={{
        isOpen,
        notifs,
        createToast,
        clearNotifs,
        notifications,
      }}
    >
      {props.children}
    </ToastNotificationsContext.Provider>
  )
}

export function useToastNotifications() {
  return useContext(ToastNotificationsContext)
}
