import { setupWorker } from 'msw/browser'

import { handler } from '@/entities/mock/api/handler'

export const worker = setupWorker(...handler)
