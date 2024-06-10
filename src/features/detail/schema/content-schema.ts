import { z } from 'zod'

export const contentSchema = z
  .string()
  .min(10, { message: '최소 10글자 이상 적어주세요' })
  .max(200, { message: '최대 200글자 이하로 적어주세요' })
