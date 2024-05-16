'use client'

import { useRouter } from 'next/navigation'

import { SITE_PATH } from '@/shared/constants'

export function useHistoryBack() {
  const router = useRouter()
  const history = typeof window !== 'undefined' ? window.history : []

  const onClickBack = () => {
    if (history.length) {
      router.back()
    } else {
      router.push(SITE_PATH.home, { scroll: true })
    }
  }

  return { onClickBack }
}
