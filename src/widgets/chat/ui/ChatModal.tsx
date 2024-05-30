'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ChatContent } from '@/features/chat/ui'
import { useChatModalStore } from '@/shared/store'

export function ChatModal() {
  const { isOpen, closed } = useChatModalStore()
  const [cache, setCache] = useState('')
  const pathName = usePathname()

  useEffect(() => {
    if (cache !== pathName) {
      closed()
    } else {
      setCache(pathName)
    }
  }, [cache, closed, pathName])

  return <ChatContent isOpen={isOpen} />
}
