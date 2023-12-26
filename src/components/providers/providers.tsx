'use client'

import { FC, ReactNode } from 'react'

import { StatsParamsProvider, Swr } from './fragments'

type Props = {
  children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <Swr>
      <StatsParamsProvider>{children}</StatsParamsProvider>
    </Swr>
  )
}
