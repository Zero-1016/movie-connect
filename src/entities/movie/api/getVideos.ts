import { Videos } from '@/entities/movie/model/video'
import { MOVIE_QUERY_KEY } from '@/shared/constants'

type Props = { queryKey: [string, string, movie_id: string] }

export const getVideos = async ({ queryKey }: Props): Promise<Videos> => {
  const [_1, _2, movie_id] = queryKey
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movie_id}/videos?language=ko-KR`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: MOVIE_QUERY_KEY.video(movie_id.toString()),
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
