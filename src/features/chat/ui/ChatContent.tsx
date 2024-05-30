'use client'

import { CoreMessage } from 'ai'
import classNames from 'classnames'
import { useState } from 'react'

import styles from './chat-content.module.scss'
import { ChatList } from './ChatList'
import { GptChatForm } from './GptChatForm'

type Props = {
  isOpen: boolean
}

export function ChatContent({ isOpen }: Props) {
  const [messages, setMessages] = useState<CoreMessage[]>([
    {
      role: 'system',
      content:
        '너는 영화 추천 AI야 너는 영화에 대한 정보만 추천을 받을 수 있고 이상한 정보를 추천을 받으면 "영화에 대한 정보만 안내 드릴 수 있습니다." 일관되게 답변해 그리고 너는 영화에 대한 제목을 추천하는거랑 짧게 설명해주는 정도의 역할을 하면 되는거야',
    },
    {
      role: 'assistant',
      content: '안녕하세요, 원하시는 영화 정보를 찾아드려요 무엇이든지 물어보세요',
    },
  ])
  return (
    <div className={classNames(styles.container, isOpen && styles.isOpen)}>
      <div className={styles.content}>
        <ChatList messages={messages} />
        <GptChatForm messages={messages} setMessages={setMessages} />
      </div>
    </div>
  )
}
