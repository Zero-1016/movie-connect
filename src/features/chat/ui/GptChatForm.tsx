'use client'

import { CoreMessage } from 'ai'
import { readStreamableValue } from 'ai/rsc'
import { ChangeEventHandler, Dispatch, useState } from 'react'

import { continueConversation } from '@/features/chat/action'
import { TextFiled } from '@/shared/ui'

type Props = {
  messages: CoreMessage[]
  setMessages: Dispatch<CoreMessage[]>
}

export function GptChatForm({ messages, setMessages }: Props) {
  const [text, setText] = useState('')
  const onChange: ChangeEventHandler<HTMLInputElement> = event => {
    setText(event.target.value)
  }
  return (
    <form
      action={async () => {
        const newMessages: CoreMessage[] = [...messages, { content: text, role: 'user' }]

        setMessages(newMessages)
        setText('')

        const result = await continueConversation(newMessages)

        for await (const content of readStreamableValue(result)) {
          setMessages([
            ...newMessages,
            {
              role: 'assistant',
              content: content as string,
            },
          ])
        }
      }}
    >
      <TextFiled value={text} onChange={onChange} />
    </form>
  )
}
