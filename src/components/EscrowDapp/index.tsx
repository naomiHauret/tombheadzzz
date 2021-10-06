import { useWeb3 } from '@contexts/Web3'
import { Switch, Match, Show, lazy } from 'solid-js'
import { Portal } from 'solid-js/web'
import CardLoadingWallet from '@components/EscrowDapp/CardLoadingWallet'
import CardConnectWallet from '@components/EscrowDapp/CardConnectWallet'
import CardWallet from '@components/EscrowDapp/CardWallet'
import CardInstallMetamask from '@components/EscrowDapp/CardInstallMetamask'
import CardWrongNetwork from '@components/EscrowDapp/CardWrongNetwork'
import { useDialog } from '@components/DialogModal/useDialog'

const DialogBidPlace = lazy(() => import('@components/DialogBidPlace'))
const DialogBidRemove = lazy(() => import('@components/DialogBidRemove'))
const DialogBidClaim = lazy(() => import('@components/DialogBidClaim'))
const GroupButtonsEscrow = lazy(() => import('@components/EscrowDapp/GroupButtonsEscrow'))

// @ts-ignore
import styles from './index.module.css'

const EscrowDapp = () => {
  //@ts-ignore
  const [state, { connectWallet }] = useWeb3()
  const dialogBidPlace = useDialog()
  const dialogBidClaim = useDialog()
  const dialogBidRemove = useDialog()

  const handlerConnectWallet = async () => {
    await connectWallet()
  }
  return (
    <>
      <div
        id="auction"
        classList={{
          [styles.wrapper]: state.user.hasMetamaskInstalled,
          [styles.showBackground]: state.user.address && state.user.balance && state.chain.isSupported,
        }}
        class="relative w-full mt-8 sm:mt-12 flex flex-col justify-center items-center z-0"
      >
        <div
          classList={{
            'bg-opacity-20 animate-appear': state.user.address && state.user.balance && state.chain.isSupported,
            'bg-opacity-0 border-solid border-1 border-neutral-100 border-opacity-10':
              !state.user.address || !state.user.balance || !state.chain.isSupported,
          }}
          class="relative rounded-2 bg-neutral-100 overflow-visible"
        >
          <div
            class={`${styles.card} w-full rounded-2 z-0 relative px-6 pt-4 pb-6 sm:pt-9 sm:pb-7 sm:px-14 tracking-3`}
            classList={{
              [styles['card--active']]: state.user.address && state.user.balance && state.chain.isSupported,
              'flex flex-col items-center justify-center':
                !state.user.address || !state.user.balance || !state.chain.isSupported,
            }}
          >
            <Show when={!state.user.hasMetamaskInstalled}>
              <CardInstallMetamask />
            </Show>

            <Show when={state.user.hasMetamaskInstalled}>
              <Switch>
                <Match when={state.user.address && state.user.balance}>
                  <Show when={!state.chain.isSupported}>
                    <CardWrongNetwork />
                  </Show>
                  <Show when={state.chain.isSupported}>
                    <CardWallet address={state.user.address} balance={state.user.balance} />
                  </Show>
                </Match>

                <Match when={state.user.loadingWallet === true}>
                  <CardLoadingWallet />
                </Match>

                <Match when={state.user.loadingWallet === false && (!state.user.address || !state.user.balance)}>
                  {/* @ts-ignore */}
                  <CardConnectWallet handleConnectWallet={handlerConnectWallet} />
                </Match>
              </Switch>
            </Show>
          </div>
        </div>
        <Show when={state.user.hasMetamaskInstalled && state.chain.isSupported}>
          <GroupButtonsEscrow
            modalsHandlers={{
              handleOpenPlaceBid: () => dialogBidPlace.setVisible(true),
              handleOpenRemoveBid: () => dialogBidRemove.setVisible(true),
              handleOpenClaimBid: () => dialogBidClaim.setVisible(true),
            }}
            disabled={state.user.address === null || state.user.balance === null}
            cssWrapper="mt-2 sm:mt-5 text-center w-full"
          />
          <Show when={state.user.address && state.user.balance}>
            <Portal>
              <DialogBidPlace
                visibility={dialogBidPlace.visible()}
                handleClose={() => dialogBidPlace.setVisible(false)}
              />
            </Portal>
            <Portal>
              <DialogBidClaim
                visibility={dialogBidClaim.visible()}
                handleClose={() => dialogBidClaim.setVisible(false)}
              />
            </Portal>
            <Portal>
              <DialogBidRemove
                visibility={dialogBidRemove.visible()}
                handleClose={() => dialogBidRemove.setVisible(false)}
              />
            </Portal>
          </Show>
        </Show>
      </div>
    </>
  )
}

export default EscrowDapp
