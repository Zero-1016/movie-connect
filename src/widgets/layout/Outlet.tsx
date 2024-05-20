import { PropsWithChildren } from 'react'

import { Footer } from '@/widgets/layout/Footer'
import { Header } from '@/widgets/layout/Header'

export function Outlet({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
