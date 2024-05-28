import { useSession } from 'next-auth/react'

import { GuestButtons, UserButton } from '@/features/auth/ui'

export function UserStatusButton() {
  const session = useSession()
  const isLogin = !!session.data
  return isLogin ? <UserButton /> : <GuestButtons />
}
