import { PropsWithChildren } from 'react'

import { pretendard } from '@/shared/pretendard'

export default function Provider({ children }: PropsWithChildren) {
  return <div className={pretendard.className}>{children}</div>
}
