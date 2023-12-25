import { ExclamationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { BAD_REQUEST, FORBIDDEN, NOT_FOUND } from 'http-status'
import { FC, useState } from 'react'

import { StatsError } from '@/types/api/stats'

type Props = {
  error: StatsError
}
export const ErrorToast: FC<Props> = ({ error }) => {
  const [open, setOpen] = useState(true)
  if (!open) return <></>
  return (
    <div className="w-full flex items-center justify-between bg-white bg-opacity-25 shadow-lg rounded-lg p-3">
      <div className="flex items-center">
        <div className="shrink-0 items-center justify-center rounded-lg  text-red-500 dark:bg-red-800 dark:text-red-200">
          <ExclamationCircleIcon className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">{toErrorMessage(error)}</div>
      </div>
      <XMarkIcon
        className="h-10 w-10 sm:h-5 sm:w-5 cursor-pointer"
        onClick={() => setOpen(false)}
      />
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
