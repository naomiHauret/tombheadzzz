import { createContext, useContext, createEffect, on } from 'solid-js'
import { providers, Contract } from 'ethers'
import { verifyAccessToAccount } from '@utils/web3'
import { CONTRACT_ESCROW } from '@utils/contractsAddresses'
import { useWeb3Transaction } from '@hooks/useWeb3Transaction'
import { IRemoveBidData, IPBidRemoveProvider } from './types'
// @ts-ignore
import AbiBid from '@abi/TombheadsEscrow'

const BidRemoveContext = createContext()
const TX_SCOPE = 'remove_bid'
export const BidRemoveProvider = (props: IPBidRemoveProvider) => {
  const { state, setState } = useWeb3Transaction()
  let provider: any

  async function removeBid(data: IRemoveBidData) {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await verifyAccessToAccount()
        setState('transaction', () => {
          return {
            status: 'user_confirmation_pending',
            uiMessage: 'Please validate the transaction to Remove your bid...',
            scope: TX_SCOPE,
          }
        })
        const provider = new providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(CONTRACT_ESCROW, AbiBid, signer)
        const transaction = await contract.remove_bid(data.removable_nft_bid_number)
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
      removeBid,
    },
  ]

  return <BidRemoveContext.Provider value={store}>{props.children}</BidRemoveContext.Provider>
}

export function useBidRemove() {
  return useContext(BidRemoveContext)
}
