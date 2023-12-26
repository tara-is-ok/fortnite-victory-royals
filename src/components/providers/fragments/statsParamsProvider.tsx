'use client'
import { createContext, Dispatch } from 'react'

import { purgeFalsyValues } from '@/utils/object'

import { StatsParams } from '.'

type Action = { type: 'update'; payload: StatsParams } // ユーザー追加

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
