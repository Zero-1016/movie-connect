import { z } from 'zod'

import { nicknameSchema } from '@/features/auth/schema'

export const nicknameFiledSchema = z.object({
  nickname: nicknameSchema,
})
