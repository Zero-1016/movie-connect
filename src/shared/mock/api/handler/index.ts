import { bookmarkHandlers } from './bookmark'
import { famousLineHandlers } from './famous-line'
import { reviewHandlers } from './review'
import { userHandlers } from './user'

export const handlers = [...userHandlers, ...bookmarkHandlers, ...reviewHandlers, ...famousLineHandlers]
