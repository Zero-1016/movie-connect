import { getDetailServer, getImageUrl } from '@/entities/movie/api'
import { IMAGE_SIZE, MOVIE_QUERY_KEY } from '@/shared/constants'
import { DetailPage } from '@/views'

type Props = {
  params: {
    movieId: string
  }
}

export async function generateMetadata({ params }: Props) {
  const { title, overview, backdrop_path } = await getDetailServer({ queryKey: MOVIE_QUERY_KEY.detail(params.movieId) })
  return {
    title: `Movie-Connect | ${title}`,
    description: `영화 미리보기: ${overview}`,
    openGraph: {
      title: title,
      description: overview,
      siteName: 'Movie-Connect',
      locale: 'ko_KR',
      type: 'website',
      images: {
        url: getImageUrl('backdrop', backdrop_path, IMAGE_SIZE.backdrop.w1280),
      },
    },
    twitter: {
      title: title,
      description: overview,
      images: {
        url: getImageUrl('backdrop', backdrop_path, IMAGE_SIZE.backdrop.w1280),
      },
    },
  }
}

export default function Page({ params }: Props) {
  return <DetailPage movieId={params.movieId} />
}
