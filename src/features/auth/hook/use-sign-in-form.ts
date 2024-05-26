'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { signInFormSchema } from '@/features/auth/schema'
import { SITE_PATH } from '@/shared/constants'

type SignInFormSchema = z.infer<typeof signInFormSchema>

export function useSignInForm() {
  const router = useRouter()
  const onSubmit: SubmitHandler<SignInFormSchema> = async data => {
    try {
      const { email, password } = data
      await toast.promise(
        signIn('credentials', {
          email,
          password,
          redirect: false,
        }),
        {
          pending: '로그인을 시도합니다.',
          success: '로그인에 성공합니다.',
          error: '회원가입에 실패합니다.',
        },
      )
      router.replace(SITE_PATH.home)
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
      }
    }
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
