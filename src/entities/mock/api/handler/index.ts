import { movieHandlers } from '@/entities/mock/api/handler/movie'
import { userHandlers } from '@/entities/mock/api/handler/user'

export const handler = [...movieHandlers, ...userHandlers]
