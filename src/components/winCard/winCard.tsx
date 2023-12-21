import { FC } from 'react'

import { StatsResponse } from '@/types/api/stats'

type Props = { data: StatsResponse['data'] }
export const WinCard: FC<Props> = ({ data }) => {
  return (
    <>
      <div className="max-w-sm w-full">
        <div className="border border-indigo-600 border-opacity-50 shadow-lg  bg-white bg-opacity-60 rounded p-4 flex flex-col">
          <div className=" flex justify-between text-gray-900 font-bold text-xl mb-2">
            <h2>{data.account.name}</h2>
          </div>
          <p className="text-gray-700 text-base font-bold">
            {`I have won the victory royale ${data.stats.all.overall.wins} times through all season💫`}
          </p>
        </div>
      </div>
    </>
  )
}
