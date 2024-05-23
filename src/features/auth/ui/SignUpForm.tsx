'use client'

import { KeyRound, KeySquare, Mail, UserRound } from 'lucide-react'
import { useState } from 'react'

import { useSignUpForm } from '@/features/auth/hook'
import { ConfirmField, TextFiled } from '@/shared/ui'

import styles from './SignForm.module.scss'
import { SubmitButton } from './SubmitButton'

export function SignUpForm() {
  const [checked, setChecked] = useState([false, false])
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

  const { handleSubmit, register, errors } = useSignUpForm()

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ConfirmField
        btnDisabled={checked[0]}
        error={errors['nickname']}
        placeholder="NickName"
        confirmAPIFn={nickNameApiFn}
        icon={<UserRound color="#475069" />}
        {...register('nickname')}
      />
      <ConfirmField
        btnDisabled={checked[1]}
        type="email"
        error={errors['email']}
        placeholder="Email"
        confirmAPIFn={emailApiFn}
        icon={<Mail color="#475069" />}
        {...register('email')}
      />
      <TextFiled
        error={errors['password']}
        type="password"
        placeholder="Password"
        icon={<KeyRound color="#475069" />}
        {...register('password')}
      />
      <TextFiled
        error={errors['confirmPassword']}
        type="password"
        placeholder="PasswordConfirm"
        icon={<KeySquare color="#475069" />}
        {...register('confirmPassword')}
      />
      <SubmitButton disabled={!!checked.filter(value => !value).length}>Sign Up</SubmitButton>
    </form>
  )
}
