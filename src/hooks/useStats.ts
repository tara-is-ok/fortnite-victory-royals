import useSWR from 'swr'

import { StatsError, StatsResponse } from '@/types/api/stats'
import { baseUrl } from '@/utils/const'

type AccountType = 'epic' | 'psn' | 'xbl'
type TimeWindow = 'season' | 'lifetime'
type Image = 'all' | 'keyboardMouse' | 'gamepad' | 'touch' | 'none'
export type StatsParams = {
  name: string
  accountType?: AccountType
  timeWindow?: TimeWindow
  image?: Image
}

export const useStats = (params?: StatsParams) => {
  const queryParams = new URLSearchParams(params).toString()
  const { data, error, isLoading } = useSWR<StatsResponse, StatsError>(
    queryParams ? `${baseUrl}/api/stats?${queryParams}` : null,
  )
  return { data: data?.data, error, isLoading }
}
