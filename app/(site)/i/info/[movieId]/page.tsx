'use client'

import { MovieDetailModal } from '@/widgets/modal'

type Props = {
  params: {
    movieId: string
  }
}

export default function Page({ params: { movieId } }: Props) {
  return (
    <div style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0 }}>
      <MovieDetailModal movieId={movieId} />
    </div>
  )
}
