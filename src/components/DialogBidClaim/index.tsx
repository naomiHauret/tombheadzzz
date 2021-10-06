import DialogModal from '@components/DialogModal'
import FormBidClaim from '@components/FormBidClaim'
import { IDialogBidClaimProps } from './types'
import { BidClaimProvider } from '@contexts/BidClaim'

const DialogBidClaim = (props: IDialogBidClaimProps) => {
  function handlerCancel() {
    props.handleClose()
  }

  return (
    <DialogModal showLabel={true} label="Claim a bid" visibility={props.visibility} handleClose={props.handleClose}>
      <BidClaimProvider>
        <FormBidClaim handleCancel={handlerCancel} />
      </BidClaimProvider>
      <div class="text-center mt-8 opacity-50 text-sm">
        This feature wasn't implemented so claiming a bid won't work !
      </div>
    </DialogModal>
  )
}

export default DialogBidClaim
