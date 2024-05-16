'use client'

import { CircularProgress } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { getMovieSearch } from '@/entities/movie/api'
import { OneMovieSearchCard } from '@/entities/movie/ui/OneMovieSearchCard'
import { MOVIE_QUERY_KEY } from '@/shared/constants'

import styles from './search-bottom-section.module.scss'

type Props = {
  keyword: string
}

export function SearchBottomSection({ keyword }: Readonly<Props>) {
  const { ref, inView } = useInView()
  const queryKey = MOVIE_QUERY_KEY.search(keyword) as [string, string, keyword: string]
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
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage().catch(err => console.error('Error fetching next pages:', err))
    }
  }, [inView, isFetching, fetchNextPage, hasNextPage])

  const searchResult = data?.pages.flatMap(item => item.results)

  return (
    <section className={styles.container}>
      <ul className={styles.searchCardBox}>
        {searchResult?.map(movieData => <OneMovieSearchCard key={movieData.id} movieData={movieData} />)}
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
