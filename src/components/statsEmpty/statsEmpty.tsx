import { UserCircleIcon } from '@heroicons/react/24/solid'
import { FC } from 'react'

import { Gifs } from '..'

export const StatsEmpty: FC = () => (
  <>
    <div className="text-gray-700 mt-12 pl-3">
      <p className="font-bold text-xl mb-3">{`What is the user's information?`}</p>
      <div className="flex items-center gap-x-2">
        <p>Please enter the information from </p>
        <UserCircleIcon className="w-7 h-7" />
        <p>below !</p>
      </div>
    </div>
    <Gifs value={5} />
  </>
)
