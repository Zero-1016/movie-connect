import { Metadata } from 'next'

import { ProfileBody } from '@/widgets/profile'

export const metadata: Metadata = {
  title: 'Movie-Connect | MyPage',
  description: '마이페이지',
}

export default function Page() {
  return <ProfileBody />
}
