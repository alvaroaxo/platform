import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/app/providers'

const inter = Inter( { subsets: ['latin'] } )

export const metadata: Metadata = {
  title: 'Platform Widgets',
  description: 'Platform Widgets',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={ inter.className }>
    <Providers>
      <main>
        { children }
      </main>
    </Providers>
    </body>
    </html>
  )
}
