'use client'

import classNames from 'classnames'

import { useBlockScroll, useHistoryBack } from '@/shared/hook'
import styles from '@/shared/ui/modal.module.scss'

type Props = {
  darkBackGround: boolean
  callback?: () => void
}

export function ModalBackGround({ darkBackGround, callback }: Props) {
  useBlockScroll()
  const { onClickBack } = useHistoryBack()

  const onClick = () => {
    if (callback) {
      callback()
    } else {
      onClickBack()
    }
  }

  return <div onClick={onClick} className={classNames(styles.background, darkBackGround && styles.isDark)} />
}
