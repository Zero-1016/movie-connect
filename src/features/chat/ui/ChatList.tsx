import { Avatar } from '@mui/material'
import { CoreMessage } from 'ai'
import { X } from 'lucide-react'
import { useSession } from 'next-auth/react'
import React, { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { useChatModalStore } from '@/shared/store'
import { getImageWithDefault } from '@/shared/util'

import styles from './chat-list.module.scss'

type Props = {
  messages: CoreMessage[]
}

export function ChatList({ messages }: Props) {
  const chatListRef = useRef<HTMLUListElement>(null)
  const session = useSession()
  const { closed } = useChatModalStore()

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight
    }
  }, [messages])

  const modalClose = () => {
    closed()
  }

  return (
    <>
      <div className={styles.chatHeader}>
        <h4>보고 싶은 영화를 질문해보세요</h4>
        <X style={{ cursor: 'pointer' }} onClick={modalClose} width={30} height={30} />
      </div>
      <ul className={styles.chatList} ref={chatListRef}>
        {messages
          .filter(v => v.role === 'assistant' || v.role === 'user')
          .map((m, index) => (
            <li key={index} className={styles.chat}>
              {m.role === 'user' ? (
                <Avatar sx={{ width: '30px', height: '30px' }} src={getImageWithDefault(session.data?.user?.image)} />
              ) : (
                <Avatar sx={{ width: '30px', height: '30px' }} src="/svg/gpt.svg" alt={'gpt'} />
              )}
              <ReactMarkdown>{m.content as string}</ReactMarkdown>
            </li>
          ))}
      </ul>
    </>
  )
}
