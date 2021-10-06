import { Button } from '@components/Button'
import { IconUnlock } from '@components/Icon'
import { ICardConnectWalletProps } from './types'

const CardConnectWallet = (props: ICardConnectWalletProps) => {
  return (
    <div class="text-sm text-center flex flex-col pt-7 sm:pt-0">
      <p>It seems your wallet isn't connected to Tombheads escrow.</p>
      <p class="my-6">Please connect your Metamask wallet to start using Tombheads escrow.</p>
      <Button
        childrenWrapperCss="items-center justify-start text-inline-start"
        css="flex mx-auto"
        theme="neutral"
        size="default"
        onClick={props.handleConnectWallet}
      >
        <IconUnlock class="mie-3" />
        Connect my wallet
      </Button>
    </div>
  )
}

export default CardConnectWallet
