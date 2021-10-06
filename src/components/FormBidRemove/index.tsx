import { Button } from '@components/Button'
import Input from '@components/Input'
import FormField from '@components/FormField'
import { createForm } from '@felte/solid'
import { validateSchema } from '@felte/validator-zod'
import schema from './schema'
import { IFormRemoveBidProps } from './types'
import { useBidRemove } from '@contexts/BidRemove'

const FormRemoveBid = (props: IFormRemoveBidProps) => {
  const [state, { removeBid }] = useBidRemove()
  const { errors, isSubmitting, reset, form } = createForm({
    onSubmit: onSubmit,
    validate: validateSchema(schema),
  })

  function onCancel() {
    reset()
    props.handleCancel()
  }

  function onSubmit(values) {
    removeBid(values)
  }

  return (
    <form use:form class="flex flex-col space-y-8">
      <FormField inputId="removable_nft_bid_number" label="Bid number" error={errors?.removable_nft_bid_number}>
        <Input
          css="w-full flex"
          id="removable_nft_bid_number"
          name="removable_nft_bid_number"
          required={true}
          invalid={errors?.removable_nft_bid_number ? true : false}
          type="number"
          min="0"
          step="1"
        />
      </FormField>

      <div class="flex flex-col xs:flex-row justify-center">
        <Button
          css="mb-6 xs:mb-0 xs:mie-6"
          loading={state.transaction.status === 'user_confirmation_pending' || state.transaction.status === 'submitted'}
          disabled={
            isSubmitting ||
            errors ||
            state.transaction.status === 'user_confirmation_pending' ||
            state.transaction.status === 'submitted'
          }
          type="submit"
          size="default"
          theme="secondary"
        >
          Remove bid
        </Button>

        <Button
          loading={state.transaction.status === 'user_confirmation_pending' || state.transaction.status === 'submitted'}
          disabled={
            isSubmitting ||
            errors ||
            state.transaction.status === 'user_confirmation_pending' ||
            state.transaction.status === 'submitted'
          }
          onClick={onCancel}
          type="button"
          theme="neutral"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default FormRemoveBid
