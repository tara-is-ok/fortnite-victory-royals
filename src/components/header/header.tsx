'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

import { useStatsParams } from '@/hooks'
import { navigations } from '@/utils/navigation'
import { hasUsername } from '@/utils/object'

import { NavDialog } from './fragments/dialog'

export const Header = () => {
  const { params } = useStatsParams()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 shadow-md">
      <nav
        className="flex items-center justify-between px-5 py-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            🧢
          </a>
        </div>
        {!mobileMenuOpen && (
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigations.map((nav) => (
            <Link
              key={nav.name}
              href={{
                pathname: nav.href,
                query: hasUsername(params) ? params : undefined,
              }}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex" />
      </nav>
      <NavDialog
        open={mobileMenuOpen}
        handleClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
