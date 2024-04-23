import { ResponseData } from '../model'

/*
등급별로 정렬된 영화 목록을 가져옵니다.
 */
export async function getTopRated(page = 1): Promise<ResponseData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/top_rated?language=ko-KR&page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: ['movies', 'topRated'],
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
