import { bookmarkHandlers } from './bookmark'
import { famousLineHandlers } from './famous-line'
import { reviewHandlers } from './review'

export const movieHandlers = [...bookmarkHandlers, ...reviewHandlers, ...famousLineHandlers]
