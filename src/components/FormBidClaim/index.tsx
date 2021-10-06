import { Button } from '@components/Button'
import Input from '@components/Input'
import FormField from '@components/FormField'
import { createForm } from '@felte/solid'
import { validateSchema } from '@felte/validator-zod'
import schema from './schema'
import { IFormClaimBidProps } from './types'
import { useBidClaim } from '@contexts/BidClaim'

const FormClaimBid = (props: IFormClaimBidProps) => {
  const [state, { claimBid }] = useBidClaim()
  const { errors, isSubmitting, reset, form } = createForm({
    onSubmit: onSubmit,
    validate: validateSchema(schema),
  })

  function onCancel() {
    reset()
    props.handleCancel()
  }

  function onSubmit(values) {
    claimBid(values)
  }

  return (
    <form use:form class="flex flex-col space-y-8">
      <FormField inputId="claimable_nft_bid_number" label="Bid number" error={errors?.claimable_nft_bid_number}>
        <Input
          css="w-full flex"
          id="claimable_nft_bid_number"
          name="claimable_nft_bid_number"
          required={true}
          invalid={errors?.claimable_nft_bid_number ? true : false}
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
          Claim bid
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

export default FormClaimBid
