import { QUERY_KEY } from '@/shared/api/constants'
import { MovieRequest, MoviesResponse } from '@/shared/api/model'

export const getUpComing = async ({ pageParam }: MovieRequest): Promise<MoviesResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=ko-KR&page=${pageParam}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: QUERY_KEY.upComing(pageParam.toString()),
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
