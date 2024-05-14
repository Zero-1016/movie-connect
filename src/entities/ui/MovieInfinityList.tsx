'use client'

import { CircularProgress } from '@mui/material'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { MovieCard } from '@/entities/ui/MovieCard'
import { MovieRequest, MoviesResponse } from '@/shared/api/model'

import styles from './movie-infinity-list.module.scss'

type Props = {
  queryKey: string[]
  // eslint-disable-next-line unused-imports/no-unused-vars
  qureyFn: ({ pageParam }: MovieRequest) => Promise<MoviesResponse>
  className?: string
}

export function MovieInfinityList({ qureyFn, queryKey, className }: Readonly<Props>) {
  const { data, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) => qureyFn({ pageParam }),
    initialPageParam: 1,
    getNextPageParam(_1, _2, _3, allPageParams) {
      return allPageParams.length + 1
    },
  })
  const { ref, inView } = useInView({ delay: 1000 })

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage()
  }, [inView, fetchNextPage, hasNextPage])

  const result = data.pages.flatMap(item => item.results)

  return (
    <>
      <ul className={classNames(styles.container, className)}>
        {result.map(value => (
          <li key={value.id} className={styles.movieCard}>
            <MovieCard movieData={value} />
          </li>
        ))}
      </ul>
      <div ref={ref} className={styles.progress}>
        <CircularProgress />
      </div>
    </>
  )
}
