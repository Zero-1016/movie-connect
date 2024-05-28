'use client'

import classNames from 'classnames'

import { useBlockScroll, useHistoryBack } from '@/shared/hook'
import styles from '@/shared/ui/modal.module.scss'

type Props = {
  darkBackGround: boolean
}

export function ModalBackGround({ darkBackGround }: Props) {
  useBlockScroll()
  const { onClickBack } = useHistoryBack()

  return <div onClick={onClickBack} className={classNames(styles.background, darkBackGround && styles.isDark)} />
}
