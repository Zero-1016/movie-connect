'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { signUpFormSchema } from '@/features/auth/schema'

type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export function useSignUpForm() {
  const onSubmit: SubmitHandler<SignUpFormSchema> = data => {
    console.info('회원가입을 시도합니다.', data)
  }

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    },
  })

  return { handleSubmit: handleSubmit(onSubmit), errors, register }
}
