import { Metadata } from 'next'

import { SignInSection } from '@/widgets/auth'

export const metadata: Metadata = {
  title: 'Movie-Connect | Login',
  description: '로그인을 위한 페이지',
}

export default function Page() {
  return <SignInSection />
}
