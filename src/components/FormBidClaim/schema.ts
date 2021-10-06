import { object, number } from 'zod'

const schema = object({
  claimable_nft_bid_number: number({
    required_error: 'A valid bid number is required',
    invalid_type_error: 'The bid must be a number',
  })
    .int()
    .nonnegative({
      message: "The bid number cant' be negative",
    }),
})

export default schema
