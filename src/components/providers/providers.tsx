'use client'

import axios from 'axios'
import { FC, ReactNode } from 'react'
import { SWRConfig } from 'swr'

type Props = {
  children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          axios(url)
            .then((res) => res.data)
            .catch((e) => e),
        //todo: キャッシュ管理
        // provider: () => new Map()
      }}
    >
      {children}
    </SWRConfig>
  )
}
