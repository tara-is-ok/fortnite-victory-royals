'use client'

import axios from 'axios'
import { BAD_REQUEST, FORBIDDEN, NOT_FOUND, OK } from 'http-status'
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
          axios(url).then((res) => {
            //todo: error handling
            switch (res.data.status) {
              case OK:
                return res.data
              case BAD_REQUEST:
              case FORBIDDEN:
              case NOT_FOUND:
                throw res
              default:
                throw res
            }
          }),
        //todo: manage cache
        // provider: () => new Map()
      }}
    >
      {children}
    </SWRConfig>
  )
}
