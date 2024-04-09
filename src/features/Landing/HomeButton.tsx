'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/shared/ui'

export function HomeButton() {
  const router = useRouter()
  const onClick = () => {
    router.push('/home')
  }

  return (
    <Button onClick={onClick}>
      Home <ArrowRight size={32} />
    </Button>
  )
}
