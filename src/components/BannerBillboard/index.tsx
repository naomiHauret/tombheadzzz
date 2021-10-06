const BannerBillboard = () => {
  return (
    <div class={`bg-green-100 p-1 tracking-3 text-xs 2xs:text-sm text-center uppercase text-neutral-300`}>
      {/* @ts-ignore */}
      <marquee truespeed="30">
        <span aria-hidden="true" class="text-xs pie-4">
          ⎧ᴿᴵᴾ⎫
        </span>

        <strong>
          Next auction: ¯\_(ツ)_/¯
          <a
            class="pis-2 underline underline hover:no-underline focus:no-underline hover:text-opacity-75 focus:text-opacity-50"
            href="https://discord.com/invite/j7J3RNUPkd"
          >
            @Tombheads Discord
          </a>
        </strong>
        <span aria-hidden="true" class="text-xs pis-4">
          ⎧ᴿᴵᴾ⎫
        </span>
        {/* @ts-ignore */}
      </marquee>
    </div>
  )
}

export default BannerBillboard
