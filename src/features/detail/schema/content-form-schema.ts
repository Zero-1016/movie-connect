import { z } from 'zod'

import { contentSchema } from './content-schema'

export const contentFormSchema = z.object({
  content: contentSchema,
})
