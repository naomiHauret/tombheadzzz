// @ts-ignore
import { logo } from './index.module.css'
const Hero = () => {
  return (
    <div class="text-center">
      <img
        height="65"
        width="601"
        alt="Tombheads"
        class={`w-auto h-auto ${logo} block mt-2 sm:mt-7 mb-4 mx-auto font-display`}
        src="/images/logo.png"
      />
      <h1>
        <div class={`sr-only`}>TombHeads</div>
        <span class="tracking-1 text-neutral-100 text-sm text-opacity-75">
          The first Erc 721 escrow for NFTs on Fantom
        </span>
      </h1>
      <div class="flex flex-col justify-center sm:flex-row my-3 sm:mt-12 sm:mb-10 tracking-3 font-display text-md 2xs:text-xl sm:text-display-1 uppercase text-neutral-100 block ">
        <span>—</span> Auction ongoing <span>—</span>
      </div>
      <a
        href="https://discord.com/invite/j7J3RNUPkd"
        class="tracking-1 cursor-pointer text-base sm:text-md text-pink-100 underline hover:no-underline focus:no-underline hover:text-opacity-80 focus:text-opacity-75"
      >
        Join the auction house on our Discord server !
      </a>
    </div>
  )
}

export default Hero
