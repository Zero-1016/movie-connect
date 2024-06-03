import { PropsWithChildren } from 'react'

import { RQProvider } from '@/shared/ui'
import { ProfileNavBar } from '@/widgets/profile'

import styles from './layout.module.scss'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <RQProvider>
      <div className={styles.container}>
        <ProfileNavBar />
        <section className={styles.rightSection}>{children}</section>
      </div>
    </RQProvider>
  )
}
