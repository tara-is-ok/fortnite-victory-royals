import { useContext } from 'react'

import {
  StatsParamsContext,
  StatsParamsDispatchContext,
} from '@/components/providers/fragments'

export const useStatsParams = () => {
  const useParams = () => useContext(StatsParamsContext)
  const useParamsDispatch = () => useContext(StatsParamsDispatchContext)
  const params = useParams()
  const dispatch = useParamsDispatch()
  return {
    params,
    dispatch,
  }
}
