import { PropsWithChildren } from 'react'

import RQProvider from '@/shared/lib/react-query/RQProvider'
import { CloseButton } from '@/shared/ui/CloseButton'
import { ModalBackGround } from '@/shared/ui/ModalBackGround'

import styles from './modal.module.scss'

type Props = {
  isClose?: boolean
}

export function Modal({ children, isClose = false }: Readonly<PropsWithChildren<Props>>) {
  return (
    <section className={styles.container}>
      <ModalBackGround />
      {isClose && <CloseButton />}
      <RQProvider>
        <div className={styles.content}>{children}</div>
      </RQProvider>
    </section>
  )
}
