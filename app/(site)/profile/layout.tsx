import { PropsWithChildren } from 'react'

import { ProfileNavBar } from '@/widgets/profile'

import styles from './layout.module.scss'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <ProfileNavBar />
      <section className={styles.section}>{children}</section>
    </div>
  )
}
