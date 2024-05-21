'use client'

import { useEffect, useState } from 'react'

export function useScrollDown() {
  const [isScrollDown, setIsScrollDown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 500) {
        setIsScrollDown(true)
      } else {
        setIsScrollDown(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isScrollDown }
}
