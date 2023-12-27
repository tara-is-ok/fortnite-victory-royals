import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Avatar,
} from '@material-tailwind/react'
import Link from 'next/link'
import { FC, useState } from 'react'

import { useStatsParams } from '@/hooks'
import { StatsResponse } from '@/types/api/stats'

type Props = { data: StatsResponse['data'] }

export const WinCard: FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(true)
  const { params } = useStatsParams()
  return (
    <Accordion
      open={open}
      icon={<Icon open={open} />}
      className="border border-indigo-600 border-opacity-50 shadow-lg  bg-white bg-opacity-90 rounded p-4 flex flex-col pb-1"
      placeholder=""
    >
      <AccordionHeader
        className="text-xl mb-2 truncate ... p-0 border-none font-body"
        onClick={() => setOpen(!open)}
        placeholder=""
      >
        {data.account.name}
      </AccordionHeader>
      <AccordionBody className="flex gap-x-1 justify-between items-center p-0 font-body pb-2">
        <Avatar
          placeholder=""
          src="/images/johnsy.webp"
          alt="avatar"
          className="border border-gray-500 bg-white"
        />
        <div className="text-gray-700 font-bold">
          <p>victory royal</p>
          <div className="flex items-baseline">
            <p className="text-3xl text-black">{data.stats.all.overall.wins}</p>
            <p className="ml-1">times 💫</p>
          </div>
        </div>
        <Link
          href={{
            pathname: '/stats',
            query: params?.name ? params : undefined,
          }}
        >
          <button className="font-bold bg-indigo-600 rounded-3xl w-fit py-1 px-3 text-white text-sm">
            More stats
          </button>
        </Link>
      </AccordionBody>
    </Accordion>
  )
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- component
const Icon: FC<{ open: boolean }> = ({ open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}
