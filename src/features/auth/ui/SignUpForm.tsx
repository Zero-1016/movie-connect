'use client'

import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { ZodError } from 'zod'

import { useSignUpForm } from '@/features/auth/hook'
import { emailCheck, nicknameCheck } from '@/features/auth/lib'
import { emailSchema, nicknameSchema } from '@/features/auth/schema'
import { ConfirmField, KeyRoundIcon, KeySquareIcon, MailIcon, TextFiled, UserIcon } from '@/shared/ui'

import styles from './SignForm.module.scss'
import { SubmitButton } from './SubmitButton'

export function SignUpForm() {
  const [checked, setChecked] = useState([false, false])

  const { handleSubmit, register, errors, getValues } = useSignUpForm()

  const nickNameApiFn = async () => {
    const nickname = getValues('nickname')
    try {
      nicknameSchema.parse(nickname)
      await toast.promise(nicknameCheck(nickname), {
        pending: '확인 중입니다.',
        error: '닉네임이 중복되었습니다.',
        success: '중복되지 않은 닉네임입니다.',
      })
      setChecked(prevState => [true, prevState[1]])
    } catch (err) {
      if (err instanceof ZodError) {
        toast.error(err.errors[0].message)
      }
    }
  }

  const emailApiFn = async () => {
    const email = getValues('email')
    try {
      emailSchema.parse(email)
      await toast.promise(emailCheck(email), {
        pending: '확인 중입니다.',
        error: '이메일이 중복되었습니다.',
        success: '중복되지 않은 이메일입니다.',
      })
      setChecked(prevState => [prevState[0], true])
    } catch (err) {
      if (err instanceof ZodError) {
        console.error(err.errors[0].message)
      }
    }
  }

  const nickNameResetFn = useCallback(() => {
    setChecked(prevState => [false, prevState[1]])
  }, [])

  const emailResetFn = useCallback(() => {
    setChecked(prevState => [prevState[0], false])
  }, [])

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ConfirmField
        btnDisabled={checked[0]}
        changeEvent={nickNameResetFn}
        error={errors['nickname']}
        placeholder="NickName"
        confirmAPIFn={nickNameApiFn}
        icon={<UserIcon />}
        {...register('nickname')}
      />
      <ConfirmField
        btnDisabled={checked[1]}
        changeEvent={emailResetFn}
        type="email"
        error={errors['email']}
        placeholder="Email"
        confirmAPIFn={emailApiFn}
        icon={<MailIcon />}
        {...register('email')}
      />
      <TextFiled
        error={errors['password']}
        type="password"
        placeholder="Password"
        icon={<KeySquareIcon />}
        {...register('password')}
      />
      <TextFiled
        error={errors['confirmPassword']}
        type="password"
        placeholder="PasswordConfirm"
        icon={<KeyRoundIcon />}
        {...register('confirmPassword')}
      />
      <SubmitButton disabled={!!checked.filter(value => !value).length}>Sign Up</SubmitButton>
    </form>
  )
}
