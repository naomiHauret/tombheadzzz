import { Button } from '@components/Button'
import Input from '@components/Input'
import FormField from '@components/FormField'
import { createForm } from '@felte/solid'
import { validateSchema } from '@felte/validator-zod'
import schema from './schema'
import { IFormPlaceBidProps } from './types'
import { useBidPlace } from '@contexts/BidPlace'

const FormPlaceBid = (props: IFormPlaceBidProps) => {
  const [state, { placeBid }] = useBidPlace()
  const { errors, isSubmitting, reset, form } = createForm({
    onSubmit: onSubmit,
    validate: validateSchema(schema),
  })

  function onSubmit(values) {
    placeBid(values)
  }

  function onCancel() {
    reset()
    props.handleCancel()
  }

  return (
    <form use:form class="flex flex-col space-y-8">
      <FormField inputId="nft_contract_address" label="NFT contract address" error={errors?.nft_contract_address}>
        <Input
          css="w-full flex"
          id="nft_contract_address"
          name="nft_contract_address"
          required={true}
          invalid={errors?.nft_contract_address ? true : false}
          pattern="^0x[a-fA-F0-9]{40}$"
          type="text"
          placeholder="0x000000000000000000000000000000000000dead"
        />
      </FormField>

      <FormField inputId="nft_id" label="NFT ID" error={errors?.nft_id}>
        <Input
          css="w-full flex"
          id="nft_id"
          name="nft_id"
          required={true}
          invalid={errors?.nft_id ? true : false}
          type="number"
          min="0"
          step="1"
        />
      </FormField>

      <FormField inputId="nft_price" label="NFT price (in FTM)" error={errors?.nft_price}>
        <Input
          css="w-full flex"
          id="nft_price"
          name="nft_price"
          required={true}
          invalid={errors?.nft_price ? true : false}
          type="number"
          min="0"
          step="any"
        />
        <div class="mt-2 text-xs opacity-75">* Fees : 6% of NFT Price</div>
      </FormField>

      <FormField required={false} inputId="nft_buyer_address" label="Buyer address" error={errors?.nft_buyer_address}>
        <Input
          css="w-full flex"
          id="nft_buyer_address"
          name="nft_buyer_address"
          required={false}
          invalid={errors?.nft_buyer_address ? true : false}
          pattern="^$|^0x[a-fA-F0-9]{40}$"
          type="text"
          placeholder="0x000000000000000000000000000000000000dead"
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
          Place bid
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

export default FormPlaceBid
