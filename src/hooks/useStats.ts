import useSWR from 'swr'

import { StatsError, StatsResponse } from '@/types/api/stats'
import { baseUrl } from '@/utils/const'

import { useStatsParams } from '.'

export const useStats = () => {
  const { params } = useStatsParams()
  const queryParams = params?.name
    ? new URLSearchParams(params).toString()
    : undefined
  const { data, error, isLoading } = useSWR<StatsResponse, StatsError>(
    queryParams ? `${baseUrl}/api/stats?${queryParams}` : null,
  )
  return { data: data?.data, error, isLoading }
}
