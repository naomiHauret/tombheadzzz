import { createEffect } from 'solid-js'
import { createStore } from 'solid-js/store'
import { IStateTransaction } from './types'
import { TRANSACTION_STATES } from '@types/transaction'
import { useToastNotifications } from '@contexts/ToastNotifications'

export function useWeb3Transaction() {
  const { createToast, notifications } = useToastNotifications()
  const [state, setState] = createStore<IStateTransaction>({
    transaction: {
      status: TRANSACTION_STATES.initial,
      uiMessage: '',
      scope: null,
    },
  })

  createEffect(() => {
    switch (state.transaction.status) {
      case 'dropped' || 'failed':
        notifications.queue
          .filter((notif) => notif.data.scope === state.transaction.scope)
          .map((notif) => notifications.remove(notif.id))
        createToast({
          title: 'Uh oh, something went wrong',
          content: state.transaction.uiMessage,
          type: 'error',
          scope: state.transaction.scope,
        })
        break
      case 'user_confirmation_pending':
        notifications.queue
          .filter((notif) => notif.data.scope === state.transaction.scope)
          .map((notif) => notifications.remove(notif.id))
        createToast({
          title: 'Awaiting your validation',
          content: state.transaction.uiMessage,
          type: 'pending',
          scope: state.transaction.scope,
        })
        break
      case 'submitted':
        notifications.queue
          .filter((notif) => notif.data.scope === state.transaction.scope)
          .map((notif) => notifications.remove(notif.id))
        createToast({
          title: 'Transaction submitted !',
          content: state.transaction.uiMessage,
          type: 'success',
          scope: state.transaction.scope,
        })
        break
      case 'confirmed':
        notifications.queue
          .filter((notif) => notif.data.scope === state.transaction.scope)
          .map((notif) => notifications.remove(notif.id))
        createToast({
          title: 'Transaction confirmed !',
          content: state.transaction.uiMessage,
          type: 'success',
          scope: state.transaction.scope,
        })
        break
    }
  })

  return {
    state,
    setState,
  }
}
