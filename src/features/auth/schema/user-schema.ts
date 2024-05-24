import { z } from 'zod'

export const emailSchema = z.string().email({ message: '이메일 형식에 맞춰 작성해주세요' })

export const nicknameSchema = z
  .string()
  .min(2, { message: '최소 2글자 이상의 닉네임을 작성해주세요' })
  .max(6, { message: '최소 6글자 미만의 닉네임을 작성해주세요' })

export const passwordSchema = z
  .string()
  .min(6, { message: '최소 6글자 이상의 비밀번호를 작성해주세요' })
  .max(20, { message: '최대 20글자 이하의 비밀번호를 작성해주세요' })
