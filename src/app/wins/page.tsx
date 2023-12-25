'use client'

import { FC, useState } from 'react'

import { Gifs, Spinner, WinCard } from '@/components'
import { StatsParams, useStats } from '@/hooks'
import { StatsResponse } from '@/types/api/stats'

import { ErrorToast } from './fragments/errorToast'
import { Form } from './fragments/form'

const Wins: FC = () => {
  const [params, setParams] = useState<StatsParams>()
  const { data, error, isLoading } = useStats(params)

  const onSubmit = async (values: StatsParams) => {
    setParams(values)
  }

  return (
    <div className="h-screen">
      <div className="relative isolate px-6 pt-20 lg:px-8 h-full">
        {error && (
          <div className="flex justify-center mb-5">
            <ErrorToast error={error} />
          </div>
        )}
        <Form isLoading={isLoading} onSubmit={onSubmit} />
        <div className="h-full mt-5">
          {isLoading ? (
            <div className="flex justify-center items-center mt-40">
              <Spinner />
            </div>
          ) : (
            <>
              {data ? (
                <>
                  <div className="absolute z-10">
                    <WinCard data={data} />
                  </div>
                  <Gifs value={Number(data?.stats.all.overall.wins)} />
                </>
              ) : (
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
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Wins
