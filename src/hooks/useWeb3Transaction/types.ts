import { ITransaction } from '@types'

interface IUiTransaction extends ITransaction {
  scope: string | null
}

export interface IStateTransaction {
  transaction: IUiTransaction
}
