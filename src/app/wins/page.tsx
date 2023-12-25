'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useState } from 'react'

import { Gifs, Spinner, StatsLayout, WinCard } from '@/components'
import { StatsParams, useStats } from '@/hooks'
import { StatsResponse } from '@/types/api/stats'
import { paramsSerializer } from '@/utils/navigation'

const Wins: FC = () => {
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
      <div className="h-full mt-5">
        {isLoading ? (
          <div className="flex justify-center items-center mt-40">
            <Spinner />
          </div>
        ) : (
          <>
            {data ? (
              <>
                <div className="absolute m-auto w-10/12 sm:w-auto z-10">
                  <WinCard data={data} />
                </div>
                <Gifs value={Number(data?.stats.all.overall.wins)} />
              </>
            ) : (
              !error && (
                <>
                  <div className="absolute z-10">
                    <WinCard
                      data={
                        {
                          account: { name: 'Your username?(Sample)' },
                          stats: { all: { overall: { wins: 5 } } },
                        } as StatsResponse['data']
                      }
                    />
                  </div>
                  <Gifs value={5} />
                </>
              )
            )}
          </>
        )}
      </div>
    </StatsLayout>
  )
}

export default Wins
