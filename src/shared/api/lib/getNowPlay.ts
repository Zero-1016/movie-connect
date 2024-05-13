import { QUERY_KEY } from '@/shared/api/constants'
import { env } from '@/shared/types'

type Props = { pageParam: number; queryKey: [string, string, string] }

export const getNowPlay = async ({ pageParam }: Props) => {
  const res = await fetch(`${env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/now_playing?language=ko-KR&page=${pageParam}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: QUERY_KEY.nowPlay(pageParam.toString()),
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
