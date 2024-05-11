'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

import RQProvider from '@/shared/lib/react-query/RQProvider'
import { getScrollbarWidth } from '@/shared/lib/util'
import { SITE_PATH } from '@/shared/types'

import closeIcon from '../../../public/svg/close.svg'
import styles from './modal.module.scss'

export function Modal({ children }: Readonly<PropsWithChildren>) {
  const router = useRouter()
  const history = typeof window !== 'undefined' ? window.history : []

  useEffect(() => {
    const width = getScrollbarWidth()

    if (Object.is(width, undefined)) return

    document.body.style.overflow = 'hidden'
    document.body.style.marginRight = `${width}px`

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.marginRight = '0px'
    }
  }, [])

  const onClickBack = () => {
    if (history.length) {
      router.back()
    } else {
      router.push(SITE_PATH.home, { scroll: true })
    }
  }

  return (
    <RQProvider>
      <div className={styles.container} onClick={onClickBack}>
        <Image className={styles.closeButton} src={closeIcon} alt="닫기 버튼" />
        {children}
      </div>
    </RQProvider>
  )
}
