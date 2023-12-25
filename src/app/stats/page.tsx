'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'

import { StatsLayout } from '@/components'
import { StatsParams, useStats } from '@/hooks'
import { paramsSerializer } from '@/utils/navigation'

import { ModeTabs } from './fragments/modeTabs'

const Stats: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const name = (searchParams.get('name') ?? undefined) as StatsParams['name']
  const accountType = (searchParams.get('accountType') ??
    undefined) as StatsParams['accountType']
  const timeWindow = (searchParams.get('timeWindow') ??
    undefined) as StatsParams['timeWindow']
  const defaultValues = { name, accountType, timeWindow }
  const [params, setParams] = useState<StatsParams>(defaultValues)
  const { data, error, isLoading } = useStats(params)
  console.log(data)

  const onSubmit = async (values: StatsParams) => {
    const queryParams = paramsSerializer(values)
    router.push(`${pathname}?${queryParams}`)
    setParams(values)
  }
  return (
    <StatsLayout
      error={error}
      params={params}
      isLoading={isLoading}
      onSubmit={onSubmit}
    >
      <ModeTabs />
    </StatsLayout>
  )
}

export default Stats
