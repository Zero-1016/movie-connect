import { QueryFunction } from '@tanstack/react-query'

import { Bookmark } from '@/entities/local_movie/model'

export const getMovieBookMark: QueryFunction<Bookmark, [string, string, string]> = async ({ queryKey }) => {
  const [_1, _2, movieId] = queryKey
  const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/bookmark/${movieId}`, {
    credentials: 'include',
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
