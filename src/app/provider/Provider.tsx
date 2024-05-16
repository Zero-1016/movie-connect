import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { PropsWithChildren } from 'react'

import FontProvider from '@/app/provider/FontProvider'
import { MSWComponent } from '@/app/provider/MSWComponent'

export default function Provider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <MSWComponent />
      <FontProvider>{children}</FontProvider>
    </AppRouterCacheProvider>
  )
}
