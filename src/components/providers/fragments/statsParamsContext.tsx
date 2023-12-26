'use client'
import { useSearchParams } from 'next/navigation'
import { createContext, FC, ReactNode, useReducer } from 'react'

import { StatsParams } from '@/types/stats'

import { StatsParamsDispatchContext, statsParamsReducer } from '.'

// eslint-disable-next-line @typescript-eslint/naming-convention -- allow to use this as react component
export const StatsParamsContext = createContext<StatsParams>({})

type Props = {
  children: ReactNode
}
export const StatsParamsProvider: FC<Props> = ({ children }) => {
  const searchParams = useSearchParams()
  const name = (searchParams.get('name') ?? undefined) as StatsParams['name']
  const accountType = (searchParams.get('accountType') ??
    undefined) as StatsParams['accountType']
  const timeWindow = (searchParams.get('timeWindow') ??
    undefined) as StatsParams['timeWindow']
  const defaultValues = { name, accountType, timeWindow }
  const [statsParams, statsParamsDispatch] = useReducer(
    statsParamsReducer,
    defaultValues,
  )

  return (
    <StatsParamsContext.Provider value={statsParams}>
      <StatsParamsDispatchContext.Provider value={statsParamsDispatch}>
        {children}
      </StatsParamsDispatchContext.Provider>
    </StatsParamsContext.Provider>
  )
}
