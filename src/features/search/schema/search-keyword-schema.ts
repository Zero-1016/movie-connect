import { z } from 'zod'

export const searchKeywordSchema = z.object({
  search: z.string(),
})
