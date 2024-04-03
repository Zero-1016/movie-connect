import { ReactNode } from 'react'

import { pretendard } from '@/shared/pretendard'

export default function FontProvider({ children }: { children: ReactNode }) {
  return <div className={pretendard.className}>{children}</div>
}
