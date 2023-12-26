'use client'

import { FC } from 'react'

import { Gifs, Spinner, StatsEmpty, StatsLayout } from '@/components'
import { useStats } from '@/hooks'

import { WinCard } from './fragments/winCard'

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
              <StatsEmpty />
            )}
          </>
        )}
      </div>
    </StatsLayout>
  )
}

export default Wins
