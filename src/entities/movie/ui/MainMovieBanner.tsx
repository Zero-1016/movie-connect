'use client'

import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { getNowPlay, getVideos } from '@/entities/movie/api'
import { MoviesResponse } from '@/entities/movie/model'
import { MOVIE_QUERY_KEY } from '@/shared/constants'
import { YoutubePlayer } from '@/shared/ui'

import styles from './main-movie-banner.module.scss'

export function MainMovieBanner() {
  const [movieIndex, setMovieIndex] = useState(0)
  const queryKey = MOVIE_QUERY_KEY.nowPlay('1') as [string, string, string]
  const { data: playListData } = useSuspenseQuery<MoviesResponse>({
    queryKey: queryKey,
    queryFn: () => getNowPlay({ pageParam: 1, queryKey }),
  })

  const movieList = useSuspenseQueries({
    queries: playListData.results
      .map(item => item.id)
      .map(id => {
        const queryVideoKey = MOVIE_QUERY_KEY.video(id.toString()) as [string, string, string]
        return {
          embed: !playListData,
          queryFn: () => getVideos({ queryKey: queryVideoKey }),
          queryKey: queryVideoKey,
        }
      }),
  })

  const keyList = movieList.reduce((acc: string[], item) => {
    const teaser = item.data.results
      .slice()
      .reverse()
      .find(v => v.type === 'Teaser')
    if (teaser) acc.push(teaser.key)
    return acc
  }, [])

  const endMovie = () => {
    setMovieIndex(prev => (prev + 1 > keyList.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className={styles.container}>
      <div className={styles.blackCover} />
      <div className={styles.movieCover} />
      <YoutubePlayer endMovie={endMovie} videoId={keyList[movieIndex]} />
    </div>
  )
}
