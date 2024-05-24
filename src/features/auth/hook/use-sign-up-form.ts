'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { z } from 'zod'

import { signUp } from '@/features/auth/lib'
import { signUpFormSchema } from '@/features/auth/schema'
import { SITE_PATH } from '@/shared/constants'

type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export function useSignUpForm() {
  const router = useRouter()
  const onSubmit: SubmitHandler<SignUpFormSchema> = async data => {
    try {
      const { email, password, nickname } = data
      await toast.promise(signUp({ email, nickname, pw: password }), {
        pending: '회원 가입을 시도합니다.',
        success: '회원가입에 성공합니다.',
        error: '회원가입에 실패합니다.',
      })
      router.replace(SITE_PATH.sign_in)
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
      }
    }
  }

  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
  } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
    },
  })

  return { handleSubmit: handleSubmit(onSubmit), errors, register, getValues }
}
