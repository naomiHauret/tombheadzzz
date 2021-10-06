const TabForSeller = () => {
  return (
    <>
      <ol>
        <li>Place a bid</li>
        <li>Enter the NFT contract address & its ID </li>
        <li>Enter the price you want in FTM </li>
        <li>
          Choose public or private bid (<span class="text-green-100">public:</span> everyone can buy from you) (
          <span class="text-green-100">private:</span> enter the address of the buyer, only him can buy){' '}
        </li>
        <li>
          Click on <span class="text-green-100">"Place your bid"</span>
        </li>
        <li>
          Copy paste the bid number (if you didn't copy your bid and quit to early, process this way:{' '}
          <span class="text-green-100">Connect Wallet → Remove Bid → My Bids</span>
        </li>
        <li>
          Give the bid number to your private buyer in DM or put your bid number for a public bid next to your NFT
        </li>
      </ol>
    </>
  )
}

export default TabForSeller
