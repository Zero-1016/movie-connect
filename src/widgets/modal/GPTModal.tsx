import { ChatContent } from '@/features/chat/ui'
import { Modal } from '@/shared/ui'

export function GPTModal() {
  return (
    <Modal darkBackGround={false}>
      <ChatContent />
    </Modal>
  )
}
