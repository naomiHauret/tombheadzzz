import { ButtonLink } from '@components/Button'

const CardWrongNetwork = () => {
  return (
    <div class="text-sm text-center flex flex-col">
      <p>
        Tombheads escrow can't function with this network. Please, switch to Fantom network in your Metamask wallet.
      </p>
      <ButtonLink
        childrenWrapperCss="items-center justify-start text-inline-start"
        css="flex mx-auto mt-6"
        theme="neutral"
        size="default"
        href="https://docs.fantom.foundation/tutorials/set-up-metamask"
        rel="noopener noreferrer"
        target="_blank"
      >
        Learn how to switch network
      </ButtonLink>
    </div>
  )
}

export default CardWrongNetwork
