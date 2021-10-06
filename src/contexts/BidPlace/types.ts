import { JSX } from 'solid-js'
export interface IPlaceBidData {
  nft_contract_address: string
  nft_id: number
  nft_price: number
  nft_buyer_address?: string
}

export interface IPBidPlaceProvider {
  children: JSX.Element
}
