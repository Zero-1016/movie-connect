/*
곧 개봉될 영화의 정보를 불러옵니다.
 */
export async function getNowPlay(page = 1) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/now_playing?language=ko-KR&page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: ['movies', 'nowPlaying'],
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
