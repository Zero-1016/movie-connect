import { Suspense } from 'react'

import { RQProvider } from '@/shared/ui'
import { DetailBottomSection, DetailMiddleSection, DetailTopSection } from '@/widgets/detail/section'
import { DetailPageSkeleton } from '@/widgets/detail/skeleton'

type Props = {
  movieId: string
}

export function DetailPage({ movieId }: Props) {
  return (
    <RQProvider>
      <Suspense fallback={<DetailPageSkeleton />}>
        <DetailTopSection movieId={movieId} />
        <DetailMiddleSection movieId={movieId} />
        <DetailBottomSection movieId={movieId} />
      </Suspense>
    </RQProvider>
  )
}
