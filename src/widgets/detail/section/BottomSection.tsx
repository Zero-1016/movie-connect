import { DetailMovieContentContainer, DetailMovieImageContainer } from '@/widgets/detail/ui'

type Props = {
  movieId: string
}

export function DetailBottomSection({ movieId }: Props) {
  return (
    <>
      <DetailMovieImageContainer movieId={movieId} />
      <DetailMovieContentContainer movieId={movieId} />
    </>
  )
}
