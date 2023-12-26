'use client'

import { FC } from 'react'

import { StatsLayout } from '@/components'
import { useStats } from '@/hooks'

import { ModeTabs } from './fragments/modeTabs'

const Stats: FC = () => {
  const { error, isLoading } = useStats()

  return (
    <StatsLayout error={error} isLoading={isLoading}>
      <div className="mt-5">
        <ModeTabs />
      </div>
    </StatsLayout>
  )
}

export default Stats
