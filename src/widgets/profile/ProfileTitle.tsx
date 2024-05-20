'use client'

import { useGetTitle } from '@/widgets/profile/hooks'

import styles from './profile-title.module.scss'

export function ProfileTitle() {
  const { title, subTitle } = useGetTitle()
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subTitle}>{subTitle}</h3>
    </div>
  )
}
