import { PropsWithChildren } from 'react'

import styles from './layout.module.scss'

export default function Layout({ children }: PropsWithChildren) {
  return <main className={styles.container}>{children}</main>
}
