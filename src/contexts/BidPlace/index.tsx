import { createContext, useContext } from 'solid-js'
import { providers, Contract } from 'ethers'
import { verifyAccessToAccount } from '@utils/web3'
import { CONTRACT_ESCROW } from '@utils/contractsAddresses'
import { useWeb3Transaction } from '@hooks/useWeb3Transaction'
import { IPlaceBidData, IPBidPlaceProvider } from './types'
// @ts-ignore
import AbiBid from '@abi/TombheadsEscrow'

const BidPlaceContext = createContext()
const TX_SCOPE = 'place_bid'
export const BidPlaceProvider = (props: IPBidPlaceProvider) => {
  const { state, setState } = useWeb3Transaction()

  let provider: any

  async function placeBid(data: IPlaceBidData) {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await verifyAccessToAccount()
        setState('transaction', () => {
          return {
            status: 'user_confirmation_pending',
            uiMessage: 'Please validate the transaction to place your bid...',
            scope: TX_SCOPE,
          }
        })
        const provider = new providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(CONTRACT_ESCROW, AbiBid, signer)
        const transaction = await contract.place_bid(
          data.nft_id,
          data.nft_contract_address,
          data?.nft_buyer_address,
          data.nft_price,
        )
        setState('transaction', () => {
          return {
            status: 'submitted',
            uiMessage: 'Transaction submitted',
            scope: TX_SCOPE,
          }
        })
        const receipt = await transaction.wait()
        // @TODO: add logic for successful & submitted transaction
      } catch (e) {
        setState('transaction', () => {
          return {
            status: 'dropped',
            uiMessage: `An error prevented the transaction : ${e.message}`,
            scope: TX_SCOPE,
          }
        })
      }
    }
  }

  const store = [
    state,
    {
      placeBid,
    },
  ]

  return <BidPlaceContext.Provider value={store}>{props.children}</BidPlaceContext.Provider>
}

export function useBidPlace() {
  return useContext(BidPlaceContext)
}
