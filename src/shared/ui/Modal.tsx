'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

import { SITE_PATH } from '@/shared/constants'
import RQProvider from '@/shared/lib/react-query/RQProvider'
import { getScrollbarWidth } from '@/shared/lib/util'

import styles from './modal.module.scss'

function Content({ children }: PropsWithChildren) {
  const onInnerClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <div onClick={onInnerClick} className={styles.modalContent}>
      {children}
    </div>
  )
}

function ModalBackGround({ children }: Readonly<PropsWithChildren>) {
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
      <button className={styles.container} onClick={onClickBack}>
        <Image className={styles.closeButton} src="/public/svg/close.svg" alt="닫기 버튼" />
        {children}
      </button>
    </RQProvider>
  )
}

export const Modal = Object.assign(ModalBackGround, { Content })
