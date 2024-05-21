'use client'

import { KeyRound, KeySquare, Mail, UserRound } from 'lucide-react'
import { ChangeEventHandler, useState } from 'react'

import { ConfirmField } from '@/features/auth/ConfirmField'
import styles from '@/features/auth/SignForm.module.scss'
import { SubmitButton } from '@/features/auth/SubmitButton'
import { TextFiled } from '@/shared/ui/TextFiled'

export function SignUpForm() {
  const [nickname, setNickname] = useState(() => '')
  const [email, setEmail] = useState(() => '')
  const [pw, setPw] = useState(() => '')
  const [confirmPw, setConfirmPw] = useState(() => '')
  const [checked, setChecked] = useState([false, false])

  const onNicknameChange: ChangeEventHandler<HTMLInputElement> = e => {
    nickNameReset()
    setNickname(e.target.value)
  }

  const onEmailChange: ChangeEventHandler<HTMLInputElement> = e => {
    emailReset()
    setEmail(e.target.value)
  }

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = e => {
    setPw(e.target.value)
  }

  const onConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = e => {
    setConfirmPw(e.target.value)
  }

  const nickNameChecked = (newState: boolean) => {
    setChecked(prevState => [newState, prevState[1]])
  }

  const emailChecked = (newState: boolean) => {
    setChecked(prevState => [prevState[0], newState])
  }

  const nickNameApiFn = () => {
    nickNameChecked(true)
  }

  const emailApiFn = () => {
    emailChecked(true)
  }

  const nickNameReset = () => {
    nickNameChecked(false)
  }

  const emailReset = () => {
    emailChecked(false)
  }
  return (
    <form className={styles.form}>
      <ConfirmField
        disabled={checked[0]}
        value={nickname}
        onChange={onNicknameChange}
        name="name"
        placeholder="NickName"
        confirmAPIFn={nickNameApiFn}
        icon={<UserRound color="#475069" />}
      />
      <ConfirmField
        disabled={checked[1]}
        value={email}
        onChange={onEmailChange}
        name="email"
        placeholder="Email"
        confirmAPIFn={emailApiFn}
        icon={<Mail color="#475069" />}
      />
      <TextFiled
        name="password"
        type="password"
        placeholder="Password"
        value={pw}
        onChange={onPasswordChange}
        icon={<KeyRound color="#475069" />}
      />
      <TextFiled
        name="passwordConfirm"
        type="password"
        placeholder="PasswordConfirm"
        value={confirmPw}
        onChange={onConfirmPasswordChange}
        icon={<KeySquare color="#475069" />}
      />
      <SubmitButton disabled={!!checked.filter(value => !value).length}>Sign Up</SubmitButton>
    </form>
  )
}
