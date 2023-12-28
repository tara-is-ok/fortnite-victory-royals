import { useContext } from 'react'

import {
  StatsParamsContext,
  StatsParamsDispatchContext,
} from '@/components/providers/fragments'
import { StatsParams } from '@/types/stats'

export const useStatsParams = () => {
  const useParams = () => useContext(StatsParamsContext)
  const useParamsDispatch = () => useContext(StatsParamsDispatchContext)
  const params = useParams()
  const dispatch = useParamsDispatch()
  const update = (values: StatsParams) =>
    dispatch({ type: 'update', payload: values })
  return {
    params,
    update,
  }
}
