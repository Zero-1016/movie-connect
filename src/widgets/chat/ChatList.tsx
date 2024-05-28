import { CoreMessage } from 'ai'
import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './chat-list.module.scss'

type Props = {
  messages: CoreMessage[]
}

export function ChatList({ messages }: Props) {
  const chatListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight
    }
  }, [messages])

  return (
    <ul className={styles.chatList} ref={chatListRef}>
      {messages
        .filter(v => v.role === 'assistant' || v.role === 'user')
        .map((m, index) => (
          <li key={index} className={styles.chat}>
            <ReactMarkdown>{((m.role === 'user' ? '나: ' : 'AI: ') + m.content) as string}</ReactMarkdown>
          </li>
        ))}
    </ul>
  )
}
