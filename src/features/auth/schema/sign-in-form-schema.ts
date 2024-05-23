import { z } from 'zod'

import { email, password } from './user-schema'

export const signInFormSchema = z.object({
  email,
  password,
})
