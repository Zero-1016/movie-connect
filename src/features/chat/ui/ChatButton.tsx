'use client'

import { Chat } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { SITE_PATH } from '@/shared/constants'
import { useChatModalStore } from '@/shared/store'

import styles from './chat-button.module.scss'

export function ChatButton() {
  const session = useSession()
  const path = usePathname()
  const { open } = useChatModalStore()

  if (!session.data || path === SITE_PATH.chat_modal) return null

  const onClick = () => {
    open()
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} className={styles.button}>
      <IconButton onClick={onClick}>
        <Chat />
      </IconButton>
    </motion.div>
  )
}
