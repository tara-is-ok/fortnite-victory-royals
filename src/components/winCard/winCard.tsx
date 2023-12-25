import Link from 'next/link'
import { FC } from 'react'

import { StatsParams } from '@/hooks'
import { StatsResponse } from '@/types/api/stats'

type Props = { data: StatsResponse['data']; params?: StatsParams }
export const WinCard: FC<Props> = ({ data, params }) => {
  return (
    <>
      <div className="max-w-sm w-full">
        <div className="border border-indigo-600 border-opacity-50 shadow-lg  bg-white bg-opacity-60 rounded p-4 flex flex-col">
          <div className=" flex justify-between text-gray-900 font-bold text-xl mb-2">
            <h2>{data.account.name}</h2>
          </div>
          <p className="text-gray-700 text-base font-bold">
            {`I have won the victory royale ${data.stats.all.overall.wins} times 💫`}
          </p>
          <Link
            href={{
              pathname: '/stats',
              query: params?.name ? params : undefined,
            }}
            className="underline text-gray-700 text-base font-bold"
          >
            More stats 🪼
          </Link>
        </div>
      </div>
    </>
  )
}
