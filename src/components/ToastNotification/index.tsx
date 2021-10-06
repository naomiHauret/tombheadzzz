import { createSignal, For, Switch, Match, createEffect, onCleanup } from 'solid-js'
import { TailwindToast, TailwindToaster, TailwindTransition } from 'solid-headless'
import { useToastNotifications } from '@contexts/ToastNotifications'
import {
  IconClose,
  IconCircleInfo,
  IconCircleDanger,
  IconCircleCheck,
  IconCircleCross,
  IconSpinner,
} from '@components/Icon'
import { IToastNotificationProps } from './types'

export const StackToastNotifications = () => {
  const { isOpen, notifs, clearNotifs } = useToastNotifications()
  return (
    <TailwindToaster class="fixed z-20 w-full bottom-0 left-0 ">
      <TailwindTransition
        show={isOpen()}
        class="relative transition"
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-50 translate-y-full"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-50 translate-y-full"
        afterLeave={clearNotifs}
      >
        <div class="flex flex-col mx-auto w-full max-w-screen-2xs py-1 space-y-2 max-h-screen overflow-hidden">
          <div class="flex-1 flex flex-col-reverse space-y-reverse space-y-1 overflow-y-auto">
            <For each={notifs().slice(0).reverse()}>
              {(item) => <ToastNotification id={item.id} message={item.data} />}
            </For>
          </div>
        </div>
      </TailwindTransition>
    </TailwindToaster>
  )
}

export const ToastNotification = (props: IToastNotificationProps) => {
  const { notifications } = useToastNotifications()

  const [isOpen, setIsOpen] = createSignal(true)

  function dismiss() {
    setIsOpen(false)
  }

  createEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 95000)

    onCleanup(() => {
      clearTimeout(timeout)
    })
  })

  return (
    <TailwindTransition
      show={isOpen()}
      class="relative transition p-4"
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-50"
      afterLeave={() => {
        notifications.remove(props.id)
      }}
    >
      <TailwindToast class="relative overflow-hidden bg-neutral-300 border-solid border-1 border-neutral-100 border-opacity-25 rounded-1 text-neutral-100">
        <button
          type="button"
          class="rounded-1 absolute text-neutral-100 text-opacity-50 top-0 inline-end-0 focus:text-opacity-100 bg-neutral-100 bg-opacity-0 focus:bg-opacity-20 hover:bg-opacity-10 p-2"
          onClick={dismiss}
        >
          <span class="sr-only">Close this notification</span>
          <IconClose />
        </button>
        <div class="flex items-center text-xs border-b-1 py-2 border-solid border-neutral-100 border-opacity-10 font-bold pis-4 pie-9 text-neutral-100 text-opacity-75">
          <Switch>
            <Match when={props.message.type === 'info'}>
              <IconCircleInfo class="text-base text-purple-100 text-opacity-100 mie-2" />
            </Match>
            <Match when={props.message.type === 'error'}>
              <IconCircleCross class="text-red-100 text-opacity-100 text-base mie-2" />
            </Match>
            <Match when={props.message.type === 'warning'}>
              <IconCircleDanger class="text-base text-yellow-100 text-opacity-100 mie-2" />
            </Match>
            <Match when={props.message.type === 'success'}>
              <IconCircleCheck class="text-green-100 text-opacity-100 text-base mie-2" />
            </Match>
            <Match when={props.message.type === 'pending'}>
              <IconSpinner class="text-base text-yellow-100 text-opacity-100 mie-2 animate-spin" />
            </Match>
          </Switch>
          {props.message.title}
        </div>
        <div class="pt-3 px-4 pb-4 text-sm">{props.message.content}</div>
        <div class="animate-toaster-bar h-1 bg-neutral-100 bg-opacity-25" />
      </TailwindToast>
    </TailwindTransition>
  )
}
