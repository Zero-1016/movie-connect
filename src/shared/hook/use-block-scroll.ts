'use client'

import { useEffect } from 'react'

export function useBlockScroll() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = '8px'

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.marginRight = '0'
    }
  }, [])
}
