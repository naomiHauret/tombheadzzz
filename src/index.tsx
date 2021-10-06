import '@styles/index.css'
import { render, Portal } from 'solid-js/web'
import { Web3Provider } from '@contexts/Web3'
import { ToastNotificationsProvider } from '@contexts/ToastNotifications'
import Layout from '@components/Layout'
import Hero from '@components/Hero'
import EscrowDapp from '@components/EscrowDapp'
import SectionHowItWorks from '@components/SectionHowItWorks'
import { StackToastNotifications } from '@components/ToastNotification'
render(
  () => (
    <ToastNotificationsProvider>
      <Layout>
        <div class="px-4 max-w-screen-lg mx-auto">
          <Hero />
          <Web3Provider>
            <EscrowDapp />
          </Web3Provider>
          <div class="max-w-screen-oldweb mx-auto">
            <SectionHowItWorks />
          </div>
        </div>
      </Layout>
      <Portal>
        <StackToastNotifications />
      </Portal>
    </ToastNotificationsProvider>
  ),
  // @ts-ignore
  document.getElementById('_dapp'),
)
