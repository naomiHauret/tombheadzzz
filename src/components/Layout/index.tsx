import BannerBillboard from '@components/BannerBillboard'
import { ILayoutProps } from './types'

const navLinksStyle =
  'tracking-3 underline transition-all hover:no-underline focus:no-underline cursor-pointer text-neutral-100 hover:text-opacity-75 focus:text-opacity-50'

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <header>
        <BannerBillboard />
        <nav class="pt-5 pb-7 sm:py-5 text-xs-min 2xs:text-base-min justify-center flex space-x-8">
          <a class={navLinksStyle} href="#auction">
            Auction
          </a>
          <a class={navLinksStyle} href="#how-it-works">
            How it works
          </a>
        </nav>
      </header>
      <main class="pb-14">{props.children}</main>
      <footer class="mt-auto border-1 border-solid border-neutral-100 border-opacity-25">
        <div class="px-4 text-center w-full max-w-screen-oldweb mx-auto text-xs-min md:text-sm py-4 flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-x-6 md:space-x-10 sm:space-y-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            class={navLinksStyle}
            href="https://pet.zoocoin.cash/collections/102"
          >
            Our official NFT collection
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            class={navLinksStyle}
            href="https://discord.com/invite/j7J3RNUPkd"
          >
            Discord
          </a>
          <a rel="noopener noreferrer" target="_blank" class={navLinksStyle} href="https://twitter.com/tombheads">
            Twitter
          </a>
          <a rel="noopener noreferrer" target="_blank" class={navLinksStyle} href="https://medium.com/@tombheads">
            Medium
          </a>
        </div>
        <BannerBillboard />
        <div class="text-xs text-center opacity-75 tracking-3 py-1">
          Made by{' '}
          <a
            href="https://github.com/naomiHauret"
            class="text-pink-100 text-opacity-75 hover:text-opacity-55 focus:text-opacity-40"
          >
            @Haunt
          </a>
        </div>
      </footer>
    </>
  )
}
