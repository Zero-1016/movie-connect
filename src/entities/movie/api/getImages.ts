/*
곧 개봉될 영화의 정보를 불러옵니다.
 */
import { QueryFunction } from '@tanstack/react-query'

import { ImageResponse } from '@/entities/movie/model/response'

export const getImages: QueryFunction<ImageResponse, [string, string, movieId: string]> = async ({ queryKey }) => {
  const [_1, _2, movieId] = queryKey
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/images?languages=en-EN`, {
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
