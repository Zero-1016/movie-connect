import { PropsWithChildren } from 'react'

import { CloseButton } from '@/shared/ui/CloseButton'
import { ModalBackGround } from '@/shared/ui/ModalBackGround'
import { RQProvider } from '@/shared/ui/RQProvider'

import styles from './modal.module.scss'

function Content({ children }: PropsWithChildren) {
  return <div className={styles.content}>{children}</div>
}

type Props = {
  isClose?: boolean
  darkBackGround?: boolean
}

function ModalContainer({ children, isClose = false, darkBackGround = true }: Readonly<PropsWithChildren<Props>>) {
  return (
    <section className={styles.container}>
      <ModalBackGround darkBackGround={darkBackGround} />
      {isClose && <CloseButton />}
      <RQProvider>{children}</RQProvider>
    </section>
  )
}

export const Modal = Object.assign(ModalContainer, { Content })
