import { z } from 'zod'

export const searchKeywordSchema = z.string().min(2, '검색의 최소 길이 (2글자)를 넘지 않습니다.')
