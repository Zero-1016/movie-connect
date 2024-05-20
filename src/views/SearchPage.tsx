import { Suspense } from 'react'

import { SearchInfinityList } from '@/entities/movie/ui'
import { RQProvider } from '@/shared/ui'
import { SearchBottomSkeleton, SearchTopSection } from '@/widgets/search'

type Props = {
  keyword: string
}

export function SearchPage({ keyword }: Props) {
  return (
    <div style={{ minHeight: 'calc(100vh - 264px)' }}>
      <SearchTopSection keyword={keyword} />
      <RQProvider>
        <Suspense fallback={<SearchBottomSkeleton />}>
          <SearchInfinityList keyword={keyword} />
        </Suspense>
      </RQProvider>
    </div>
  )
}
