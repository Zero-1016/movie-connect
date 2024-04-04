import type { Metadata } from 'next'
import { ReactNode } from 'react'

import Provider from '@/app/Provider'

export const metadata: Metadata = {
  title: 'Movie Connect',
  description: '사람과 영화를 연결해주는 이곳',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode
  modal: ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Provider>
          {children}
          {modal}
        </Provider>
      </body>
    </html>
  )
}
