'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { navigations } from '@/utils/const'

import { NavDialog } from './fragments/dialog'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-50 shadow-md">
      <nav
        className="flex items-center justify-between px-5 py-3 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home</span>
            {/* eslint-disable-next-line @next/next/no-img-element -- コメントアウトサンプル */}
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
        <div className="hidden lg:flex flex-1 lg:gap-x-12">
          {navigations.map((nav) => (
            <a
              key={nav.name}
              href={nav.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {nav.name}
            </a>
          ))}
        </div>
      </nav>
      <NavDialog
        open={mobileMenuOpen}
        handleClose={() => setMobileMenuOpen(false)}
      />
    </header>
  )
}
