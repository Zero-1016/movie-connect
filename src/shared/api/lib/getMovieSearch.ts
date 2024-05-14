import { QUERY_KEY } from '@/shared/api/constants'
import { MoviesResponse } from '@/shared/api/model'

type Props = { pageParam: number; queryKey: [string, string, keyword: string] }

export const getMovieSearch = async ({ pageParam, queryKey }: Props): Promise<MoviesResponse> => {
  const [_1, _2, keyword] = queryKey
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?query=${keyword}&language=ko-KR&page=${pageParam}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
      },
      next: {
        tags: QUERY_KEY.search(keyword),
      },
      cache: 'no-store',
    },
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
