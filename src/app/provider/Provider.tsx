import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

import FontProvider from '@/app/provider/FontProvider'
import { MSWComponent } from '@/app/provider/MSWComponent'

export function Provider({ children }: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <MSWComponent />
      <FontProvider>
        <SessionProvider>{children}</SessionProvider>
      </FontProvider>
    </AppRouterCacheProvider>
  )
}
