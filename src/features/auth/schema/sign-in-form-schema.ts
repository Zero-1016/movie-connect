import { z } from 'zod'

import { emailSchema, passwordSchema } from './user-schema'

export const signInFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
