'use client'
import { useEffect } from 'react'

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        const { worker } = require('@/shared/mock/api')
        worker.start({ onUnhandledRequest: 'bypass' }).catch(() => console.error('error in msw worker'))
      }
    }
  }, [])

  return null
}
