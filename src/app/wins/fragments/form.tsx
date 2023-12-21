import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { StatsParams } from '@/hooks'

type Props = {
  isLoading: boolean
  onSubmit: (valus: StatsParams) => void
}
export const Form: FC<Props> = ({ isLoading, onSubmit }) => {
  const { watch, register, handleSubmit } = useForm<StatsParams>()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:flex gap-x-5">
      <div className="flex-1">
        <div className="grid grid-rows-3 sm:grid-rows-2 grid-flow-col gap-x-5 md:grid-rows-1">
          <div className="col-span-1 sm:col-span-4 md:col-span-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username*
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="name"
                  {...register('name')}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Account
            </label>
            <div className="mt-2">
              <select
                id="accountType"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-transparent"
                {...register('accountType')}
              >
                <option value="epic">epic</option>
                <option value="psn">playstation</option>
                <option value="xbl">xbox</option>
              </select>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Time Window
            </label>
            <div className="mt-2">
              <select
                id="timeWindow"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-transparent"
                {...register('timeWindow')}
              >
                <option>lifetime</option>
                <option>season</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex col-span-1 justify-end items-end mt-5">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
          disabled={!watch('name') || isLoading}
        >
          Submit
        </button>
      </div>
    </form>
  )
}
