import { QUERY_KEY } from '@/shared/api/constants'

type Props = { pageParam: number; queryKey?: [string, string, string] }

export const getTopRated = async ({ pageParam }: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/top_rated?language=ko-KR&page=${pageParam}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: QUERY_KEY.topRated(pageParam.toString()),
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
