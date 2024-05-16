'use client'

import { CircularProgress } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { MovieSearchCard } from '@/entities/ui/MovieSearchCard'
import { QUERY_KEY } from '@/shared/api/constants'
import { getMovieSearch } from '@/shared/api/lib'

import styles from './search-list.module.scss'

type Props = {
  keyword: string
}

export function SearchList({ keyword }: Readonly<Props>) {
  const { ref, inView } = useInView()
  const queryKey = QUERY_KEY.search(keyword) as [string, string, keyword: string]
  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) => getMovieSearch({ pageParam, queryKey }),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.total_pages > lastPageParam) return lastPageParam + 1

      return null
    },
    initialPageParam: 1,
  })

  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage()
    }
  }, [inView, isFetching, fetchNextPage])

  const searchResult = data?.pages.flatMap(item => item.results)

  return (
    <section className={styles.container}>
      <ul className={styles.searchCardBox}>
        {searchResult?.map(movieData => <MovieSearchCard key={movieData.id} movieData={movieData} />)}
      </ul>
      {hasNextPage && (
        <div
          ref={ref}
          style={{
            height: '200px',
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
    </section>
  )
}
