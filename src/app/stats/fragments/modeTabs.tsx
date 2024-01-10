import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react'
import { FC } from 'react'

import { Spinner, StatsEmpty } from '@/components'
import { useStats } from '@/hooks'
import { Duo, Solo, Squad } from '@/types/api/stats'

const modes = [
  { label: 'Solo', value: 'solo' },
  { label: 'Duo', value: 'duo' },
  { label: 'Squad', value: 'squad' },
] as const

export const ModeTabs: FC = () => {
  const { data, isLoading } = useStats()
  return (
    <Tabs value="solo">
      <TabsHeader
        placeholder=""
        className="bg-transparent border border-indigo-300"
        indicatorProps={{ className: 'bg-indigo-600' }}
      >
        {modes.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            placeholder=""
            activeClassName="text-white font-semibold"
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder="">
        {isLoading ? (
          <div className="flex justify-center items-center mt-40">
            <Spinner />
          </div>
        ) : (
          <>
            {data ? (
              <>
                <TabPanel value="solo" className="grid gap-y-2">
                  {data.stats.all.solo && (
                    <>
                      <p className="font-bold text-lg">{data.account.name}</p>
                      {Object.keys(data.stats.all.solo).map((key) => (
                        <p key={key}>{`${insertSpace(key)}: ${
                          data.stats.all.solo[key as keyof Solo]
                        }`}</p>
                      ))}
                    </>
                  )}
                </TabPanel>
                <TabPanel value="duo" className="grid gap-y-2">
                  {data.stats.all.duo && (
                    <>
                      <p className="font-bold text-lg">{data.account.name}</p>
                      {Object.keys(data.stats.all.duo).map((key) => (
                        <p key={key}>{`${insertSpace(key)}: ${
                          data.stats.all.duo[key as keyof Duo]
                        }`}</p>
                      ))}
                    </>
                  )}
                </TabPanel>
                <TabPanel value="squad" className="grid gap-y-2">
                  {data.stats.all.squad && (
                    <>
                      <p className="font-bold text-lg">{data.account.name}</p>
                      {Object.keys(data.stats.all.squad).map((key) => (
                        <p key={key}>{`${insertSpace(key)}: ${
                          data.stats.all.squad[key as keyof Squad]
                        }`}</p>
                      ))}
                    </>
                  )}
                </TabPanel>
              </>
            ) : (
              <div className="h-screen">
                <StatsEmpty />
              </div>
            )}
          </>
        )}
      </TabsBody>
    </Tabs>
  )
}

const insertSpace = (value: string) =>
  value
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
