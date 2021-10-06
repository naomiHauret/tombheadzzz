import { Show, mergeProps } from 'solid-js'
import { Button } from '@components/Button'
import { IconLock } from '@components/Icon'

interface IGroupButtonEscrowProps {
  cssWrapper: string
  disabled: boolean
  modalsHandlers: any
}

const GroupButtonsEscrow = (props: IGroupButtonEscrowProps) => {
  props = mergeProps({ disabled: true, cssWrapper: '' }, props)

  return (
    <div class={props.cssWrapper}>
      <Show when={props.disabled === false}>
        <span class="text-neutral-100 animate-appear text-opacity-70 text-xs">Go nuts. (NFA)</span>
      </Show>
      <div class="animate-appear mt-4 sm:mt-9 flex flex-col xs:flex-row xs:flex-wrap xs:justify-center">
        <div class="w-full flex flex-col xs:justify-center xs:flex-row space-y-4 xs:space-y-0 xs:space-x-4 sm:space-x-8">
          <Button
            onClick={props.modalsHandlers.handleOpenPlaceBid}
            disabled={props.disabled}
            childrenWrapperCss="items-center"
            css="flex justify-center w-full xs:w-auto"
            size="default"
            theme="primary"
          >
            <Show when={props.disabled}>
              <IconLock class="mie-3" />
            </Show>
            Place bid
          </Button>
          <Button
            onClick={props.modalsHandlers.handleOpenClaimBid}
            disabled={props.disabled}
            childrenWrapperCss="items-center"
            css="flex justify-center w-full xs:w-auto"
            size="default"
            theme="secondary"
          >
            <Show when={props.disabled}>
              <IconLock class="mie-3" />
            </Show>
            Claim bid
          </Button>
        </div>
        <Button
          onClick={props.modalsHandlers.handleOpenRemoveBid}
          disabled={props.disabled}
          size="default"
          childrenWrapperCss="items-center"
          css="flex justify-center w-full xs:w-auto mt-4 xs:mx-auto sm:mt-8"
          theme="neutral"
        >
          <Show when={props.disabled}>
            <IconLock class="mie-3" />
          </Show>
          Remove bid
        </Button>
      </div>
    </div>
  )
}

export default GroupButtonsEscrow
