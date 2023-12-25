'use client'

import { FC } from 'react'

import { ModeTabs } from './fragments/modeTabs'

const Stats: FC = () => {
  return (
    <div className="h-screen">
      <div className="px-6 pt-20 lg:px-8  grid gap-y-5">
        <ModeTabs />
      </div>
    </div>
  )
}

export default Stats
