'use client'

import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Button } from '@material-tailwind/react'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="h-screen flex flex-col gap-y-5 items-center justify-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        🧊Fortnite Stats🫧
      </h1>
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        🪼😶‍🌫️💦💦🧩💦💦🌱💧
      </p>
      <a href="/wins">
        <Button
          className="bg-indigo-600 flex items-center hover:bg-indigo-500"
          placeholder=""
        >
          try victory royal times
          <ArrowRightIcon className="w-5 h-5 ml-1" />
        </Button>
      </a>
    </div>
  )
}

export default Home
