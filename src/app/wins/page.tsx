'use client'

import { FC } from 'react'

import { Gifs, Spinner, StatsEmpty, StatsLayout } from '@/components'
import { useStats } from '@/hooks'

import { WinCard } from './fragments/winCard'

const Wins: FC = () => {
  const { data, error, isLoading } = useStats()

  return (
    <StatsLayout error={error} isLoading={isLoading}>
      {isLoading ? (
        <div className="flex justify-center items-center mt-40">
          <Spinner />
        </div>
      ) : (
        <>
          {data ? (
            <>
              <div className="absolute z-10 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-11/12 w-fit">
                <WinCard data={data} />
              </div>
              <Gifs value={Number(data?.stats.all.overall.wins)} />
            </>
          ) : (
            <StatsEmpty />
          )}
        </>
      )}
    </StatsLayout>
  )
}

export default Wins
