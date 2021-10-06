export async function verifyAccessToAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' })
}
