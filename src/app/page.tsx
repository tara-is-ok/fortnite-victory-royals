'use client'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-72">
          <div className="text-center grid gap-y-5">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              🧊Fortnite Stats🫧
            </h1>
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🪼😶‍🌫️💦💦🧩💦💦🌱💧
            </p>
            <a
              href="/wins"
              className="flex justify-center text-2xl font-semibold leading-6 text-gray-900 underline"
            >
              try victory royals
              <ArrowRightCircleIcon className="w-6 h-6 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
