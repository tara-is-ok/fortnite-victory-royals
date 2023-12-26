'use client'

import { FC } from 'react'

import { Gifs, Spinner, StatsLayout, WinCard } from '@/components'
import { useStats } from '@/hooks'
import { StatsResponse } from '@/types/api/stats'

const Wins: FC = () => {
  const { data, error, isLoading } = useStats()

  return (
    <StatsLayout error={error} isLoading={isLoading}>
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
