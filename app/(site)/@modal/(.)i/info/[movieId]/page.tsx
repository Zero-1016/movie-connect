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

export default function Page({ params }: Props) {
  return <MovieDetailModal movieId={params.movieId} />
}
