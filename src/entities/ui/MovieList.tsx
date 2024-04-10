'use client'

import { useSuspenseQueries } from '@tanstack/react-query'

import { getNowPlay, getPopular, getTopRated, getUpComing } from '@/entities/lib'

export function MovieList() {
  const [{ data: nowPlayList }, { data: popularList }, { data: topRatedList }, { data: upcomingList }] =
    useSuspenseQueries({
      queries: [
        { queryFn: () => getNowPlay(1), queryKey: ['movies', 'nowPlaying'], retry: false },
        { queryFn: () => getPopular(1), queryKey: ['movies', 'popular'], retry: false },
        { queryFn: () => getTopRated(1), queryKey: ['movies', 'topRated'], retry: false },
        { queryFn: () => getUpComing(1), queryKey: ['movies', 'upcoming'], retry: false },
      ],
    })
  return (
    <>
      <div>{nowPlayList.results[0].title}</div>
      <div>{popularList.results[0].title}</div>
      <div>{topRatedList.results[0].title}</div>
      <div>{upcomingList.results[0].title}</div>
    </>
  )
}
