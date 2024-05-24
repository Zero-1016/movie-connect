import { KeyRound, KeySquare, Mail, UserRound } from 'lucide-react'
import { memo } from 'react'

export const UserIcon = memo(() => <UserRound color="#475069" />)
UserIcon.displayName = 'UserIcon'

export const MailIcon = memo(() => <Mail color="#475069" />)
MailIcon.displayName = 'MailIcon'

export const KeyRoundIcon = memo(() => <KeyRound color="#475069" />)
KeyRoundIcon.displayName = 'KeyRoundIcon'

export const KeySquareIcon = memo(() => <KeySquare color="#475069" />)
KeySquareIcon.displayName = 'KeySquareIcon'
