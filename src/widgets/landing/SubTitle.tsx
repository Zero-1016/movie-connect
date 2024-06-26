'use client'

import { useTextInterval } from '@/shared/hook'

import styles from './subtitle.module.scss'

type Props = {
  subTitleList: readonly string[]
}

export function SubTitle({ subTitleList }: Props) {
  const subTitle = useTextInterval(subTitleList, 100)
  return <div className={styles.subTitle}>{subTitle}</div>
}
