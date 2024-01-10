import './globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { Background, Header } from '@/components'
import { Providers } from '@/providers/providers'

export const metadata: Metadata = {
  title: 'Fortnite Stats 🧤',
  description: 'See your Fortnite record 🐊',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="font-body h-[100dvh]">
        <Background>
          <Providers>
            <Header />
            {children}
          </Providers>
        </Background>
      </body>
    </html>
  )
}

export default RootLayout
