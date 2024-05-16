'use client'

import { MouseEventHandler, useEffect, useRef, useState } from 'react'

export const useDragHandler = () => {
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [prevMouseX, setPrevMouseX] = useState(0)
  const [prevScrollX, setPrevScrollX] = useState(0)
  const ref = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current && isMouseDown) {
        const deltaX = e.clientX - prevMouseX
        ref.current.scrollLeft = prevScrollX - deltaX
      }
    }

    const handleMouseUp = () => {
      setIsMouseDown(false)
    }

    if (isMouseDown) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isMouseDown, prevMouseX, prevScrollX])

  const onMouseDown: MouseEventHandler<HTMLUListElement> = e => {
    if (!ref.current) return
    e.preventDefault()
    setIsMouseDown(true)
    setPrevMouseX(e.clientX)
    setPrevScrollX(ref.current.scrollLeft)
  }

  return { ref, onMouseDown }
}
