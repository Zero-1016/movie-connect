import { GuestButtons, UserButton } from '@/features/auth'

type Props = {
  isLogin: boolean
}

export function UserStatusButton({ isLogin }: Props) {
  return isLogin ? <UserButton /> : <GuestButtons />
}
