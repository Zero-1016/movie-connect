import { Suspense } from 'react'

import { RQProvider } from '@/shared/ui'
import { SearchBottomSection, SearchTopSection } from '@/widgets/search/section'
import { SearchBottomSkeleton } from '@/widgets/search/skeleton'

type Props = {
  keyword: string
}

export function SearchPage({ keyword }: Props) {
  return (
    <div style={{ minHeight: 'calc(100vh - 264px)' }}>
      <SearchTopSection keyword={keyword} />
      <RQProvider>
        <Suspense fallback={<SearchBottomSkeleton />}>
          <SearchBottomSection keyword={keyword} />
        </Suspense>
      </RQProvider>
    </div>
  )
}
