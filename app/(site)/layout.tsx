import { ReactNode } from 'react'

import { Outlet } from '@/widgets/layout'

import styles from './layout.module.scss'

type Props = {
  children: ReactNode
  modal: ReactNode
}

export default function Layout({ children, modal }: Props) {
  return (
    <main className={styles.container}>
      {modal}
      <Outlet>{children}</Outlet>
    </main>
  )
}
