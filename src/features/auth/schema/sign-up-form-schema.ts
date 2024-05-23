import { z } from 'zod'

import { email, nickname, password } from './user-schema'

export const signUpFormSchema = z
  .object({
    nickname,
    email,
    password,
    confirmPassword: password,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })
