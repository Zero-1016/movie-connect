import { QueryFunction } from '@tanstack/react-query'

import { DetailResponse } from '@/entities/movie/model'

export const getDetail: QueryFunction<DetailResponse, [string, string, movieId: string]> = async ({ queryKey }) => {
  const [_1, _2, movieId] = queryKey
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}?language=ko-KR`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
