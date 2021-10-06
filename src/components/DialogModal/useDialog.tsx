import { createSignal } from 'solid-js'

export function useDialog() {
  const [visible, setVisible] = createSignal(false)
  return {
    visible,
    setVisible,
  }
}
