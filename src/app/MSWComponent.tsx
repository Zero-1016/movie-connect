'use client'
import { useEffect } from 'react'

import { env } from '@/shared/types'

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        const { worker } = require('@/shared/mock/api')
        worker.start({ onUnhandledRequest: 'bypass' })
      }
    }
  }, [])

  return null
}
