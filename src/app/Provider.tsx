import { ReactNode } from 'react'

import RQProvider from '@/app/RQProvider'

export default function Provider({ children }: { children: ReactNode }) {
  return <RQProvider>{children}</RQProvider>
}
