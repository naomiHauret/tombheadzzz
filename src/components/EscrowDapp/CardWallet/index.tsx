// @ts-ignore
import styles from './index.module.css'
import { ICardWalletProps } from './types'

const CardWallet = (props: ICardWalletProps) => {
  return (
    <>
      <button
        title="Click to change your wallet"
        class="top-0 left-0 cursor-pointer absolute z-2 w-full h-full block opacity-0"
      >
        Change wallet
      </button>
      <img
        width="55"
        height="44"
        loading="lazy"
        src="/images/fantom_logo.png"
        class="h-7 w-auto sm:h-11 absolute top-4 inline-end-4 sm:top-6 sm:inline-end-6"
      />
      <div class="mb-3 sm:mb-5">
        <span class="text-xs sm:text-base-min text-neutral-100 text-opacity-70 block mt-5 sm:mt-6">Balance</span>
        <span class={`${styles.balance} text-md sm:text-display-1 tracking-2 text-neutral-100 block truncate`}>
          {props.balance}
        </span>
      </div>
      <div>
        <div class="mb-1 sm:mb-7">
          <span class="text-xs sm:text-base-min text-neutral-100 text-opacity-70 block sm:mb-2">Wallet</span>
          <span class={`text-sm sm:text-base-min block truncate ${styles.address}`}>{props.address}</span>
        </div>
        <span class="text-xs sm:text-sm text-neutral-100 text-opacity-70">
          <span aria-hidden="true" class="xs:sr-only">
            Exp. date:
          </span>
          <span class="sr-only xs:not-sr-only">Expiration date:</span> <span class="uppercase">Wen moon</span>
        </span>
      </div>
    </>
  )
}

export default CardWallet
