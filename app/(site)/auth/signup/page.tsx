import { Metadata } from 'next'

import { SignUpSection } from '@/widgets/auth'

export const metadata: Metadata = {
  title: 'Movie-Connect | SignUp',
  description: '회원가입을 위한 페이지',
}

export default function Page() {
  return <SignUpSection />
}
