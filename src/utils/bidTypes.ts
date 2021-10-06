export type BidValue = 'private' | 'public'

export interface IBid {
  label: string
  value: BidValue
}

export const bidsOptions: Array<IBid> = [
  {
    label: 'Public',
    value: 'public',
  },
  {
    label: 'Private',
    value: 'private',
  },
]
