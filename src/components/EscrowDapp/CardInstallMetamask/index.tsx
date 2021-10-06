import { ButtonLink } from '@components/Button'

const CardInstallMetamask = () => (
  <div class="text-sm text-center flex flex-col">
    <p>
      You need <span class="font-bold underline">Metamask</span> to interact with Tombheads escrow
    </p>
    <ButtonLink
      childrenWrapperCss="items-center justify-start text-inline-start"
      css="flex mx-auto mt-6"
      theme="neutral"
      size="default"
      target="_blank"
      href="https://metamask.io/"
      rel="noopener noreferrer"
    >
      Install Metamask
    </ButtonLink>
  </div>
)

export default CardInstallMetamask
