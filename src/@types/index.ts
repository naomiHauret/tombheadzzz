export { IToken } from './token'
export { IBlockchainBasicData, IBlockchainConfig, IBlockchainRecord } from './blockchain'
export { ITransaction, TRANSACTION_STATES } from './transaction'

declare global {
  interface Window {
    ethereum: any
  }
}
