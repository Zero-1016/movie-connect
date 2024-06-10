import { Metadata } from 'next'

import { MovieDetailModal } from '@/widgets/modal'

export const metadata: Metadata = {
  title: 'preview movie detail',
  description: 'preview movie detail',
}

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
