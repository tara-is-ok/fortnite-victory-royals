'use client'
import { useSearchParams } from 'next/navigation'
import { createContext, FC, ReactNode, useReducer } from 'react'

import { StatsParams } from '@/types/stats'
import { purgeFalsyValues } from '@/utils/object'

import { StatsParamsDispatchContext, statsParamsReducer } from '.'

// eslint-disable-next-line @typescript-eslint/naming-convention -- allow to use this as react component
export const StatsParamsContext = createContext<StatsParams>({})

type Props = {
  children: ReactNode
}
export const StatsParamsProvider: FC<Props> = ({ children }) => {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  const accountType = searchParams.get('accountType')
  const timeWindow = searchParams.get('timeWindow')
  const defaultValues = purgeFalsyValues({ name, accountType, timeWindow })
  const [params, paramsDispatch] = useReducer(statsParamsReducer, defaultValues)

  return (
    <StatsParamsContext.Provider value={params}>
      <StatsParamsDispatchContext.Provider value={paramsDispatch}>
        {children}
      </StatsParamsDispatchContext.Provider>
    </StatsParamsContext.Provider>
  )
}
