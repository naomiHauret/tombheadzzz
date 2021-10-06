import DialogModal from '@components/DialogModal'
import FormBidPlace from '@components/FormBidPlace'
import { IDialogBidPlaceProps } from './types'
import { BidPlaceProvider } from '@contexts/BidPlace'

const DialogBidPlace = (props: IDialogBidPlaceProps) => {
  function handlerCancel() {
    props.handleClose()
  }

  return (
    <DialogModal showLabel={true} label="Place a bid" visibility={props.visibility} handleClose={props.handleClose}>
      <BidPlaceProvider>
        <FormBidPlace handleCancel={handlerCancel} />
      </BidPlaceProvider>
    </DialogModal>
  )
}

export default DialogBidPlace
