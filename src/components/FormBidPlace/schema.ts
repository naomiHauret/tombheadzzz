import { object, string, number } from 'zod'

const schema = object({
  nft_contract_address: string({
    required_error: 'A valid address is required',
    invalid_type_error: 'A valid address is required',
  }).regex(/^0x[a-fA-F0-9]{40}$/, {
    message: 'A valid address is required',
  }),
  nft_id: number({
    required_error: 'A valid NFT ID is required',
    invalid_type_error: 'NFT ID must be a number',
  })
    .int()
    .nonnegative({
      message: "The NFT ID cant' be negative",
    }),
  nft_price: number({
    required_error: 'A price is required',
    invalid_type_error: 'Price must be a number',
  }).nonnegative({
    message: "Price cant' be negative",
  }),
  nft_buyer_address: string({
    required_error: 'A valid address is required',
    invalid_type_error: 'A valid address is required',
  }).regex(/^$|^0x[a-fA-F0-9]{40}$/, {
    // address or empty
    message: 'A valid address is required',
  }),
})

export default schema
