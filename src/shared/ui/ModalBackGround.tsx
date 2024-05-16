'use client'

import { useBlockScroll, useHistoryBack } from '@/shared/hook'
import styles from '@/shared/ui/modal.module.scss'

export function ModalBackGround() {
  useBlockScroll()
  const { onClickBack } = useHistoryBack()

  return <div onClick={onClickBack} className={styles.background} />
}
