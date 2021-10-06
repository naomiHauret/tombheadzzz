import DialogModal from '@components/DialogModal'
import FormBidRemove from '@components/FormBidRemove'
import { IDialogBidRemoveProps } from './types'
import { BidRemoveProvider } from '@contexts/BidRemove'

const DialogBidRemove = (props: IDialogBidRemoveProps) => {
  function handlerCancel() {
    props.handleClose()
  }

  return (
    <DialogModal showLabel={true} label="Remove a bid" visibility={props.visibility} handleClose={props.handleClose}>
      <BidRemoveProvider>
        <FormBidRemove handleCancel={handlerCancel} />
      </BidRemoveProvider>
      <div class="text-center mt-8 opacity-50 text-sm">
        This feature wasn't implemented so removing a bid won't work !
      </div>
    </DialogModal>
  )
}

export default DialogBidRemove
