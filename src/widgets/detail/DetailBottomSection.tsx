import { Suspense } from 'react'

import { MovieContentForm, MovieImagesSlide } from '@/entities/ui'

type Props = {
  movieId: string
}

export function DetailBottomSection({ movieId }: Props) {
  return (
    <section>
      <Suspense fallback={null}>
        <MovieImagesSlide movieId={movieId} />
        <MovieContentForm movieId={movieId} />
      </Suspense>
    </section>
  )
}
