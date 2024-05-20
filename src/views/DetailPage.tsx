import { Suspense } from 'react'

import { DetailMovieContentContainer } from '@/entities/content/ui'
import { DetailMovieBanner, DetailMovieImageContainer, DetailMovieIntro } from '@/entities/movie/ui'
import { RQProvider } from '@/shared/ui'
import { DetailPageSkeleton } from '@/widgets/detail'

type Props = {
  movieId: string
}

export function DetailPage({ movieId }: Props) {
  return (
    <RQProvider>
      <Suspense fallback={<DetailPageSkeleton />}>
        <DetailMovieBanner movieId={movieId} />
        <DetailMovieIntro movieId={movieId} />
        <DetailMovieImageContainer movieId={movieId} />
        <DetailMovieContentContainer movieId={movieId} />
      </Suspense>
    </RQProvider>
  )
}
