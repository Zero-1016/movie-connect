'use client'

import { CircularProgress } from '@mui/material'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { MovieRequest, MoviesResponse } from '@/entities/movie/model'
import { OneMovieCard } from '@/widgets/movie'

import styles from './movie-infinity-list.module.scss'

type Props = {
  queryKey: string[]
  // eslint-disable-next-line unused-imports/no-unused-vars
  qureyFn: ({ pageParam }: MovieRequest) => Promise<MoviesResponse>
  className?: string
}

export function MovieInfinityList(props: Readonly<Props>) {
  const { data, hasNextPage, fetchNextPage, isFetching } = useSuspenseInfiniteQuery({
    queryKey: props.queryKey,
    queryFn: ({ pageParam }) => props.qureyFn({ pageParam }),
    initialPageParam: 1,
    getNextPageParam(_1, _2, _3, allPageParams) {
      return allPageParams.length + 1
    },
  })
  const { ref, inView } = useInView({ delay: 1000 })

  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage().catch(err => console.error('Error fetching next pages:', err))
    }
  }, [inView, isFetching, fetchNextPage, hasNextPage])

  const result = data.pages.flatMap(item => item.results)

  return (
    <>
      <ul className={classNames(styles.container, props.className)}>
        {result.map(value => (
          <OneMovieCard key={value.id} movieData={value} />
        ))}
      </ul>
      <div ref={ref} className={styles.progress}>
        <CircularProgress />
      </div>
    </>
  )
}
