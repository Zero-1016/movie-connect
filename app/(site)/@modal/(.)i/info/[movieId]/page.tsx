import { MovieDetailModal } from '@/entities/modal'

type Props = {
  params: {
    movieId: string
  }
}

export default function Page({ params }: Props) {
  return <MovieDetailModal movieId={params.movieId} />
}
