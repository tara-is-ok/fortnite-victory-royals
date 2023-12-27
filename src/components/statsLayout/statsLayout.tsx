'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Drawer, IconButton, Typography } from '@material-tailwind/react'
import { usePathname, useRouter } from 'next/navigation'
import { FC, ReactNode, useState } from 'react'

import { useStatsParams } from '@/hooks'
import { StatsError } from '@/types/api/stats'
import { StatsParams } from '@/types/stats'
import { paramsSerializer } from '@/utils/navigation'

import { ErrorToast } from './fragments/errorToast'
import { Form } from './fragments/form'

type Props = {
  children: ReactNode
  error?: StatsError
  isLoading: boolean
}

export const StatsLayout: FC<Props> = ({ children, error, isLoading }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { params, dispatch } = useStatsParams()
  const [open, setOpen] = useState(params.name ? false : true)
  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  const onSubmit = async (values: StatsParams) => {
    const queryParams = paramsSerializer(values)
    router.push(`${pathname}?${queryParams}`)
    dispatch({ type: 'update', payload: values })
    closeDrawer()
  }

  return (
    <>
      <div className="h-screen">
        <div className="relative isolate px-6 pt-16 lg:px-8 h-full">
          {error && (
            <div className="pt-2">
              <ErrorToast error={error} />
            </div>
          )}
          {children}
          <div className="flex fixed bottom-3 right-3">
            <IconButton placeholder="" variant="text" onClick={openDrawer}>
              <UserCircleIcon className="w-10 h-10 text-gray-700" />
            </IconButton>
          </div>
        </div>
      </div>
      <Drawer
        open={open}
        onClose={closeDrawer}
        placeholder=""
        placement="bottom"
        className="px-3 py-2 rounded-t-lg"
        size={400}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-x-1">
            <Typography
              placeholder=""
              className=" text-lg font-bold text-gray-700"
            >
              User
            </Typography>
            <UserCircleIcon className="w-6 h-6 text-gray-700" />
          </div>
          <IconButton placeholder="" variant="text" onClick={closeDrawer}>
            <XMarkIcon className="w-5 h-5" />
          </IconButton>
        </div>
        <Form params={params} isLoading={isLoading} onSubmit={onSubmit} />
      </Drawer>
    </>
  )
}
