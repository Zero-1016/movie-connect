import { create } from 'zustand'

type ChatModalStore = {
  isOpen: boolean
  open: () => void
  closed: () => void
}

export const useChatModalStore = create<ChatModalStore>(set => ({
  isOpen: false,
  open: () => {
    set({ isOpen: true })
  },
  closed: () => {
    set({ isOpen: false })
  },
}))
