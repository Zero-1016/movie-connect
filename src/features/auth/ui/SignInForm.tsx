'use client'

import { useSignInForm } from '@/features/auth/hook'
import { KeyRoundIcon, MailIcon, TextFiled } from '@/shared/ui'

import styles from './SignForm.module.scss'
import { SubmitButton } from './SubmitButton'

export function SignInForm() {
  const { handleSubmit, register, errors, isSubmitting } = useSignInForm()

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextFiled type="email" placeholder="Email" error={errors['email']} icon={<MailIcon />} {...register('email')} />
      <TextFiled
        type="password"
        placeholder="Password"
        {...register('password')}
        error={errors['password']}
        icon={<KeyRoundIcon />}
      />
      <SubmitButton disabled={isSubmitting}>Login</SubmitButton>
    </form>
  )
}
