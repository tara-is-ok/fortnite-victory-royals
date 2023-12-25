'use client'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

import { navigations } from '@/utils/navigation'

type Props = {
  open: boolean
  handleClose: () => void
}

export const NavDialog: FC<Props> = ({ open, handleClose }) => {
  return (
    <Dialog as="div" className="lg:hidden" open={open} onClose={handleClose}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            {/* eslint-disable-next-line @next/next/no-img-element -- コメントアウトサンプル */}
            🧢
          </a>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={handleClose}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigations.map((nav) => (
                <a
                  key={nav.name}
                  href={nav.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {nav.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}
