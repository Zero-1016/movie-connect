import { Metadata } from 'next'

import { MainPage } from '@/views'

export const metadata: Metadata = {
  title: 'Movie-Connect | Home',
  description: '메인 페이지',
}

export default function Page() {
  return <MainPage />
}
