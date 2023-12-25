'use client'
import { FC, ReactNode } from 'react'

import { StatsParams } from '@/hooks'
import { StatsError } from '@/types/api/stats'

import { ErrorToast } from './fragments/errorToast'
import { Form } from './fragments/form'

type Props = {
  children: ReactNode
  error?: StatsError
  params: StatsParams
  isLoading: boolean
  onSubmit: (values: StatsParams) => void
}

export const StatsLayout: FC<Props> = ({
  children,
  error,
  params,
  isLoading,
  onSubmit,
}) => {
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
