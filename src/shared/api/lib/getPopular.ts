import { ResponseData } from '../model'

/*
인기순으로 정렬된 영화 목록을 불러옵니다.
 */
export async function getPopular(page = 1): Promise<ResponseData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?language=ko-KR&page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: ['movies', 'popular'],
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
