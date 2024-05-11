'use client'

import RQProvider from '@/shared/lib/react-query/RQProvider'
import { MainBannerSection, MainList } from '@/widgets/main'

export function MainPage() {
  return (
    <>
      <RQProvider>
        <MainBannerSection />
        <MainList />
      </RQProvider>
    </>
  )
}
