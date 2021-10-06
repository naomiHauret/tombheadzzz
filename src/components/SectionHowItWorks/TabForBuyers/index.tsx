const TabForBuyers = () => {
  return (
    <>
      <ol>
        <li>Claim the bid</li>
        <li>Enter the bid number received</li>
        <li>
          This shows all info about it.{' '}
          <span class="font-bold underline">Make sure to double check the NFT address and NFT number !</span>
        </li>
        <li>Confirm your transaction</li>
      </ol>

      <h3 class="font-bold text-base sm:text-md mt-6 mb-6 sm:mt-7">
        Once confirmed, to verify your NFT in your Metamask wallet:
      </h3>
      <details class="sm:pis-2">
        <summary class="text-base base sm:text-md">On desktop</summary>

        <p class="font-bold underline">Desktop Metamask doesn't allow NFT adding yet. </p>
        <br />
        <p>
          You can verify the address of the NFT and your current address in the search bar. You will see that you
          possess an NFT with the ID in that collection.
        </p>
      </details>

      <details class="mt-8 sm:pis-2">
        <summary class="text-base base sm:text-md">On mobile</summary>
        In the NFT section : <br />
        <ol class="mt-4">
          <li>Put the NFT address</li>
          <li>Put the NFT ID number</li>
          <li>Confirm. Tada ! You should now see your new NFT.</li>
        </ol>
      </details>
    </>
  )
}

export default TabForBuyers
