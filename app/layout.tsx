import './global.scss'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Movie Connect',
    description: '사람과 영화를 연결해주는 이곳',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode
    modal: ReactNode
}>) {
    return (
        <html lang="en">
        <body suppressHydrationWarning={true}>
        {children}
        </body>
        </html>
    )
}
