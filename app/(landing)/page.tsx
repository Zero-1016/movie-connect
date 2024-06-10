import { Metadata } from 'next'

import { LandingPage } from '@/views'

export const metadata: Metadata = {
  title: 'Movie Connect',
  description: 'landing page',
}

export default function Home() {
  return <LandingPage />
}
