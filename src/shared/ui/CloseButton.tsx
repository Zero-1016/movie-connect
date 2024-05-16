'use client'

import Image from 'next/image'

import { useHistoryBack } from '@/shared/hook'
import styles from '@/shared/ui/close-button.module.scss'

export function CloseButton() {
  const { onClickBack } = useHistoryBack()
  return (
    <Image
      onClick={onClickBack}
      className={styles.closeButton}
      width={50}
      height={50}
      src="/svg/close.svg"
      alt="닫기 버튼"
    />
  )
}
