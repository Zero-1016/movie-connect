'use client'

import { useTextInterval } from '@/features/landing/hooks'
import styles from '@/features/landing/landing-left-section.module.scss'

type Props = {
  subTitleList: readonly string[]
}

export function SubTitle({ subTitleList }: Props) {
  const subTitle = useTextInterval(subTitleList, 100)
  return <div className={styles.subTitle}>{subTitle}</div>
}
