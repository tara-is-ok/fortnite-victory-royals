'use client'
import { createContext, Dispatch } from 'react'

import { StatsParams } from '@/types/stats'
import { purgeFalsyValues } from '@/utils/object'

type Action = { type: 'update'; payload: StatsParams }

export const statsParamsReducer = (
  params: StatsParams,
  action: Action,
): StatsParams => {
  const { type, payload } = action

  switch (type) {
    case 'update':
      params = payload
      return { ...purgeFalsyValues(params) }
    default:
      throw new Error('Invalid action') //todo: error handling
  }
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- allow to use this as react component
export const StatsParamsDispatchContext = createContext<Dispatch<Action>>(
  () => undefined,
)
