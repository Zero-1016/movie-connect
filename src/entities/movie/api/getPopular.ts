import { MovieRequest, MoviesResponse } from '@/entities/movie/model'

export const getPopular = async ({ pageParam }: MovieRequest): Promise<MoviesResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?language=ko-KR&page=${pageParam}`, {
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
