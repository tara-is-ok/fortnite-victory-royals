import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react'

export const ModeTabs = () => {
  const modes = [
    { label: 'Solo', value: 'solo' },
    { label: 'Duo', value: 'duo' },
    { label: 'Trio', value: 'trio' },
    { label: 'Squad', value: 'squad' },
  ]

  return (
    <Tabs value="html">
      <TabsHeader placeholder="">
        {modes.map(({ label, value }) => (
          <Tab key={value} value={value} placeholder="">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder="">
        <TabPanel value="solo">solo stats</TabPanel>
        <TabPanel value="duo">duo stats</TabPanel>
        <TabPanel value="trio">trio stats</TabPanel>
        <TabPanel value="squad">squad stats</TabPanel>
      </TabsBody>
    </Tabs>
  )
}
