'use client'

import { useEffect, useState } from 'react'

export function useTextInterval(titles: readonly string[], interval: number): string | null {
  const [currentIndex, setCurrentIndex] = useState(0) // 현재 타이틀의 인덱스
  const [displayText, setDisplayText] = useState<string | null>(null) // 화면에 표시할 타이틀

  useEffect(() => {
    let charIndex = 0 // 현재 글자의 인덱스

    const typingTimer = setInterval(() => {
      if (charIndex <= titles[currentIndex].length) {
        // 현재 타이틀의 글자를 하나씩 추가
        setDisplayText(titles[currentIndex].substring(0, charIndex))
        charIndex++
      } else {
        // 모든 글자가 입력된 후에는 하나씩 지워지도록 설정
        clearInterval(typingTimer)

        const deletingTimer = setInterval(() => {
          if (charIndex >= 0) {
            // 글자를 하나씩 지움
            setDisplayText(titles[currentIndex].substring(0, charIndex))
            charIndex--
          } else {
            // 모든 글자가 지워진 후에는 다음 타이틀로 이동
            clearInterval(deletingTimer)

            setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length)
          }
        }, interval)
      }
    }, interval)

    return () => clearInterval(typingTimer)
  }, [titles, currentIndex, interval])

  return displayText
}
