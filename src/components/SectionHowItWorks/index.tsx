// @ts-ignore
import { heading, howItWorksPrestyling } from './index.module.css'
import { createSignal, For } from 'solid-js'
import { TabGroup, Tab, TabList, TabPanel } from '@components/Tabs'
import TabForBuyers from './TabForBuyers'
import TabForSellers from './TabForSellers'

const SectionHowItWorks = () => {
  const [tabs] = createSignal([
    {
      id: 'buyer',
      label: 'For buyers',
      render: () => <TabForBuyers />,
    },
    {
      id: 'seller',
      label: 'For sellers',
      render: () => <TabForSellers />,
    },
  ])
  const [currentTab, setCurrentTab] = createSignal(tabs()[0].id)
  function handlerTabChange(id: string, e: Event) {
    setCurrentTab(id)
  }

  return (
    <section class="pt-10 sm:pt-20" id="how-it-works">
      <h2 class={`mb-12 text-center text-lg sm:text-display-1 tracking-3 ${heading}`}>How it works</h2>
      <TabGroup class={howItWorksPrestyling}>
        <TabList>
          <For each={tabs()}>
            {(tab, i) => (
              <Tab
                isCurrentTab={currentTab() === tab.id}
                onClick={[handlerTabChange, tab.id]}
                id={tab.id}
                aria-controls={`tab-${tab.id}`}
              >
                {tab.label}
              </Tab>
            )}
          </For>
        </TabList>
        <For each={tabs()}>
          {(tab, i) => (
            <TabPanel isCurrentTab={currentTab() === tab.id} aria-labelledby={tab.id} id={`${tab.id}-tab`}>
              {tab.render()}
            </TabPanel>
          )}
        </For>
      </TabGroup>
    </section>
  )
}

export default SectionHowItWorks
