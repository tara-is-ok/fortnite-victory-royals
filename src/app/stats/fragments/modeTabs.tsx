import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react'
import { FC } from 'react'

import { StatsResponse } from '@/types/api/stats'

type Props = {
  data?: StatsResponse['data']
}

const modes = [
  { label: 'Solo', value: 'solo' },
  { label: 'Duo', value: 'duo' },
  { label: 'Squad', value: 'squad' },
] as const
export const ModeTabs: FC<Props> = ({ data }) => {
  const solo = data?.stats.all.solo
  const duo = data?.stats.all.duo
  const squad = data?.stats.all.squad
  console.log(squad)
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
        <TabPanel value="solo">
          <div className="grid gap-y-2">
            <p>{data?.account.name}</p>
            {solo && (
              <>
                <p>{`Victory royals: ${solo.wins}`}</p>
                <p>{`Win rate: ${solo.winRate}`}</p>
                <p>{`Kills: ${solo.kills}`}</p>
                <p>{`Kills per min : ${solo.killsPerMin}`}</p>
                <p>{`Kills per match : ${solo.killsPerMatch}`}</p>
                <p>{`Deaths: ${solo.deaths}`}</p>
                <p>{`Matches: ${solo.matches}`}</p>
                <p>{`Kills per Death${solo.kd}`}</p>
                <p>{`Minutes played: ${solo.minutesPlayed}`}</p>
                <p>{`Top 10: ${solo.top10}`}</p>
                <p>{`Top 25: ${solo.top25}`}</p>
              </>
            )}
          </div>
        </TabPanel>
        <TabPanel value="duo">
          <div className="grid gap-y-2">
            <p>{data?.account.name}</p>
            {duo && (
              <>
                <p>{`Victory royals: ${duo.wins}`}</p>
                <p>{`Win rate: ${duo.winRate}`}</p>
                <p>{`Kills: ${duo.kills}`}</p>
                <p>{`Kills per min : ${duo.killsPerMin}`}</p>
                <p>{`Kills per match : ${duo.killsPerMatch}`}</p>
                <p>{`Deaths: ${duo.deaths}`}</p>
                <p>{`Matches: ${duo.matches}`}</p>
                <p>{`Kills per Death${duo.kd}`}</p>
                <p>{`Minutes played: ${duo.minutesPlayed}`}</p>
                <p>{`Top 10: ${duo.top5}`}</p>
                <p>{`Top 25: ${duo.top12}`}</p>
              </>
            )}
          </div>
        </TabPanel>
        <TabPanel value="squad">
          <div className="grid gap-y-2">
            <p>{data?.account.name}</p>
            {squad && (
              <>
                <p>{`Victory royals: ${squad.wins}`}</p>
                <p>{`Win rate: ${squad.winRate}`}</p>
                <p>{`Kills: ${squad.kills}`}</p>
                <p>{`Kills per min : ${squad.killsPerMin}`}</p>
                <p>{`Kills per match : ${squad.killsPerMatch}`}</p>
                <p>{`Deaths: ${squad.deaths}`}</p>
                <p>{`Matches: ${squad.matches}`}</p>
                <p>{`Kills per Death${squad.kd}`}</p>
                <p>{`Minutes played: ${squad.minutesPlayed}`}</p>
                <p>{`Top 10: ${squad.top3}`}</p>
                <p>{`Top 25: ${squad.top6}`}</p>
              </>
            )}
          </div>
        </TabPanel>
      </TabsBody>
    </Tabs>
  )
}
