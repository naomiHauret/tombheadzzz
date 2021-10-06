import {
  TailwindDialog,
  TailwindDialogPanel,
  TailwindDialogTitle,
  TailwindTransition,
  TailwindTransitionChild,
  TailwindDialogOverlay,
} from 'solid-headless'

import { createEffect, mergeProps } from 'solid-js'
import { IconClose } from '@components/Icon'
import { IDialogModalProps } from './types'

const DialogModal = (props: IDialogModalProps) => {
  props = mergeProps({ visibility: false, showLabel: false }, props)

  createEffect(() => {
    // Lock scroll when modal is open
    // @ts-ignore
    props.visibility === true
      ? (document.querySelector('html').style.overflowY = 'hidden')
      : (document.querySelector('html').style.overflowY = 'auto')
  })
  return (
    <TailwindTransition appear show={props.visibility}>
      <TailwindDialog defaultOpen isOpen class="fixed inset-0 z-10 overflow-y-auto" onClose={props.handleClose}>
        <div class="min-h-screen px-4 flex items-center justify-center">
          <TailwindTransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <TailwindDialogOverlay className="fixed inset-0 bg-neutral-300 bg-opacity-50" />
          </TailwindTransitionChild>

          <TailwindTransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            class="w-full flex justify-center items-center"
          >
            <TailwindDialogPanel class="border-solid border-1 border-neutral-100 border-opacity-25 flex flex-col w-full sm:max-screen-xs md:max-screen-sm lg:max-w-screen-oldweb pis-6 sm:pis-12 py-8 pie-12 my-8 overflow-hidden relative align-middle transition-all transform bg-neutral-200">
              <button
                onClick={props.handleClose}
                class="p-2 absolute inline-end-5 top-5 text-center rounded-1 focus:bg-neutral-100 focus:bg-opacity-5 flex flex-col items-center justify-end"
              >
                <IconClose class="sm:text-lg" />
                <span class="text-opacity-50 text-neutral-100 text-xs hidden lg:block" aria-hidden="true">
                  [ESC]
                </span>
                <span class="sr-only">Close this dialog</span>
              </button>
              <TailwindDialogTitle
                as="h1"
                classList={{
                  'text-lg text-neutral-100 mb-5': props.showLabel === true,
                  'sr-only': props.showLabel === false,
                }}
              >
                {props.label}
              </TailwindDialogTitle>
              <div class="mt-2">{props.children}</div>
            </TailwindDialogPanel>
          </TailwindTransitionChild>
        </div>
      </TailwindDialog>
    </TailwindTransition>
  )
}

export default DialogModal
