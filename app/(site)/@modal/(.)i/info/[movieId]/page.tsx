import { MovieDetailModal } from '@/widgets/modal/section'

type Props = {
  params: {
    movieId: string
  }
}

export default function Page({ params }: Props) {
  return <MovieDetailModal movieId={params.movieId} />
}
