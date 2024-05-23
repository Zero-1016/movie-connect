'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { signInFormSchema } from '@/features/auth/schema'

type SignInFormSchema = z.infer<typeof signInFormSchema>

export function useSignInForm() {
  const onSubmit: SubmitHandler<SignInFormSchema> = data => {
    console.info('로그인을 시도합니다', data)
  }

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    register,
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  return { handleSubmit: handleSubmit(onSubmit), errors, register, isSubmitting }
}
