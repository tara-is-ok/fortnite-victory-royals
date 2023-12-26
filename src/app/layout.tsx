import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Background, Header } from '@/components'
import { Providers } from '@/components/providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fortnite Stats 🧤',
  description: 'See your Fortnite record 🐊',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className={inter.className}>
          <Background>
            <Providers>
              <Header />
              {children}
            </Providers>
          </Background>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
