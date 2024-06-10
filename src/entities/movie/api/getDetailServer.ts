import { DetailResponse } from '@/entities/movie/model'

export const getDetailServer = async ({
  queryKey,
}: {
  queryKey: [string, string, string]
}): Promise<DetailResponse> => {
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
