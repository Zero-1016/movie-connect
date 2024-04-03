import { DetailPage } from '@/views'

type Props = {
  params: {
    movieId: string
  }
}

export default function Page({ params }: Props) {
  return <DetailPage movieId={params.movieId} />
}
