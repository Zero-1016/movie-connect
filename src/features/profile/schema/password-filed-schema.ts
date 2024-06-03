import { string, z } from 'zod'

import { passwordSchema } from '@/features/auth/schema'

export const passwordFiledSchema = z
  .object({
    prevPassword: string().optional(),
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })
