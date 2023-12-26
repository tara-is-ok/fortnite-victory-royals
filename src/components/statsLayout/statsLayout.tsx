'use client'
import { usePathname, useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'

import { useStatsParams } from '@/hooks'
import { StatsError } from '@/types/api/stats'
import { paramsSerializer } from '@/utils/navigation'

import { StatsParams } from '../providers/fragments'
import { ErrorToast } from './fragments/errorToast'
import { Form } from './fragments/form'

type Props = {
  children: ReactNode
  error?: StatsError
  isLoading: boolean
}

export const StatsLayout: FC<Props> = ({ children, error, isLoading }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { params, dispatch } = useStatsParams()

  const onSubmit = async (values: StatsParams) => {
    const queryParams = paramsSerializer(values)
    router.push(`${pathname}?${queryParams}`)
    dispatch({ type: 'update', payload: values })
  }
  return (
    <div className="h-screen">
      <div className="relative isolate px-6 pt-20 lg:px-8 h-full">
        {error && (
          <div className="flex justify-center mb-5">
            <ErrorToast error={error} />
          </div>
        )}
        <Form params={params} isLoading={isLoading} onSubmit={onSubmit} />
        {children}
      </div>
    </div>
  )
}
