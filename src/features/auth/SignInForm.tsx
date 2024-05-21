'use client'

import { KeyRound, Mail } from 'lucide-react'
import { ChangeEventHandler, useState } from 'react'

import { SubmitButton } from '@/features/auth/SubmitButton'
import { TextFiled } from '@/shared/ui/TextFiled'

import styles from './SignForm.module.scss'

export function SignInForm() {
  const [id, setId] = useState(() => '')
  const [pw, setPw] = useState(() => '')

  const onIdChange: ChangeEventHandler<HTMLInputElement> = e => {
    setId(e.target.value)
  }

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = e => {
    setPw(e.target.value)
  }
  return (
    <form className={styles.form}>
      <TextFiled name={'id'} placeholder="Email" value={id} onChange={onIdChange} icon={<Mail color="#475069" />} />
      <TextFiled
        name={'pw'}
        placeholder="password"
        value={pw}
        onChange={onPasswordChange}
        icon={<KeyRound color="#475069" />}
      />
      <SubmitButton>로그인</SubmitButton>
    </form>
  )
}
