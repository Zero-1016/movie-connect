'use client'

import { KeyRound, Mail } from 'lucide-react'

import { useSignInForm } from '@/features/auth/hook'
import { TextFiled } from '@/shared/ui'

import styles from './SignForm.module.scss'
import { SubmitButton } from './SubmitButton'

export function SignInForm() {
  const { handleSubmit, register, errors, isSubmitting } = useSignInForm()

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextFiled
        type="email"
        placeholder="Email"
        error={errors['email']}
        icon={<Mail color="#475069" />}
        {...register('email')}
      />
      <TextFiled
        type="password"
        placeholder="Password"
        {...register('password')}
        error={errors['password']}
        icon={<KeyRound color="#475069" />}
      />
      <SubmitButton disabled={isSubmitting}>Login</SubmitButton>
    </form>
  )
}
