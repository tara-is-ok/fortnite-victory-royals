import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { StatsParams } from '@/types/stats'

type Props = {
  params: StatsParams
  isLoading: boolean
  onSubmit: (valus: StatsParams) => void
}
export const Form: FC<Props> = ({ params, isLoading, onSubmit }) => {
  const { watch, register, handleSubmit } = useForm<StatsParams>({
    defaultValues: params,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Username*
        </label>
        <div className="mt-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <input
            type="text"
            autoCapitalize="off"
            id="username"
            autoComplete="username"
            className="block w-full border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="name"
            {...register('name')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-x-5 sm:flex-row">
        <div className="flex-1">
          <label
            htmlFor="account"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Account
          </label>
          <div className="mt-2">
            <select
              id="accountType"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
              {...register('accountType')}
            >
              <option value="epic">epic</option>
              <option value="psn">playstation</option>
              <option value="xbl">xbox</option>
            </select>
          </div>
        </div>
        <div className="flex-1">
          <label
            htmlFor="time window"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Time Window
          </label>
          <div className="mt-2">
            <select
              id="timeWindow"
              autoComplete="country-name"
              className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent"
              {...register('timeWindow')}
            >
              <option>lifetime</option>
              <option>season</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-end">
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
