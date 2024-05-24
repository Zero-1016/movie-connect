import 'react-toastify/dist/ReactToastify.css'

import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

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
      <Outlet>
        <ToastContainer autoClose={1000} />
        {children}
      </Outlet>
    </main>
  )
}
