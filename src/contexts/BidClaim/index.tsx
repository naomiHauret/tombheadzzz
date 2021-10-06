import { createContext, useContext } from 'solid-js'
import { providers, Contract } from 'ethers'
import { verifyAccessToAccount } from '@utils/web3'
import { CONTRACT_ESCROW } from '@utils/contractsAddresses'
import { useWeb3Transaction } from '@hooks/useWeb3Transaction'
import { IClaimBidData, IPBidClaimProvider } from './types'
// @ts-ignore
import AbiBid from '@abi/TombheadsEscrow'

const BidClaimContext = createContext()
const TX_SCOPE = 'claim_bid'

export const BidClaimProvider = (props: IPBidClaimProvider) => {
  const { state, setState } = useWeb3Transaction()
  let provider: any

  async function claimBid(data: IClaimBidData) {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await verifyAccessToAccount()
        setState('transaction', () => {
          return {
            status: 'user_confirmation_pending',
            uiMessage: 'Please validate the transaction to claim your bid...',
            scope: TX_SCOPE,
          }
        })
        const provider = new providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new Contract(CONTRACT_ESCROW, AbiBid, signer)
        const transaction = await contract.claim_bid(data.claimable_nft_bid_number)
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
      claimBid,
    },
  ]

  return <BidClaimContext.Provider value={store}>{props.children}</BidClaimContext.Provider>
}

export function useBidClaim() {
  return useContext(BidClaimContext)
}
