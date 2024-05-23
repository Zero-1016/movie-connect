import { GuestButtons, UserButton } from '@/features/auth/ui'

type Props = {
  isLogin: boolean
}

export function UserStatusButton({ isLogin }: Props) {
  return isLogin ? <UserButton /> : <GuestButtons />
}
