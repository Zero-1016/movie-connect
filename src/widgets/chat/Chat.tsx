import { PropsWithChildren } from 'react'

import styles from './chat.module.scss'

function ChatBox({ children }: PropsWithChildren) {
  return <div className={styles.container}>{children}</div>
}

function ChatContent({ children }: PropsWithChildren) {
  return <div className={styles.content}>{children}</div>
}

export const Chat = Object.assign(ChatBox, { ChatContent })
