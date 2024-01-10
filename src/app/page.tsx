import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <div className="h-full flex flex-col gap-y-5 items-center pt-56">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        🧊Fortnite Stats🫧
      </h1>
      <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        🪼😶‍🌫️💦💦🧩💦💦🌱💧
      </p>
      <a href="/wins">
        <button className="bg-indigo-600 flex items-center hover:bg-indigo-500 rounded-xl w-fit py-2 px-4 text-white text-sm font-bold">
          Try victory royal times
          <ArrowRightIcon className="w-5 h-5 ml-1" />
        </button>
      </a>
    </div>
  )
}

export default Home
