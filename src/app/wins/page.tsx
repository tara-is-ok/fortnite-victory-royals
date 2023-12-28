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
              <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-fit sm:left-3 sm:transform-none">
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
