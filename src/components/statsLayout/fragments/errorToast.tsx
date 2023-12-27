import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { BAD_REQUEST, FORBIDDEN, NOT_FOUND } from 'http-status'
import { FC } from 'react'

import { StatsError } from '@/types/api/stats'

type Props = {
  error: StatsError
}
export const ErrorToast: FC<Props> = ({ error }) => {
  return (
    <div className="flex w-fit rounded-lg">
      <div className="flex items-start">
        <div className="shrink-0 items-center justify-center rounded-lg  text-red-500 dark:bg-red-800 dark:text-red-200">
          <ExclamationCircleIcon className="h-5 w-5" />
        </div>
        <div className="ml-2 text-sm  text-red-400">
          {toErrorMessage(error)}
        </div>
      </div>
    </div>
  )
}

const toErrorMessage = (error: StatsError) => {
  console.log(error)
  switch (error.data.status) {
    case NOT_FOUND:
      return 'User not found. Please check the username registered in your account type.'
    case FORBIDDEN:
      return 'This account is private. If it is your account, please change it from the official settings.'
    case BAD_REQUEST:
      return 'Incorrect value is entered. Please check the input.'
    default:
      return 'Server error has occurred. Please try again in a few minutes.'
  }
}
