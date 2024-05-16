'use client'

import { Suspense, useMemo } from 'react'

import { getPopular, getTopRated, getUpComing } from '@/entities/movie/api'
import { MovieType } from '@/entities/movie/model/movie'
import { MovieInfinitySkeletonList } from '@/widgets/list/skeleton/MovieInfinitySkeletonList'
import { MovieInfinityList } from '@/widgets/list/ui/MovieInfinityList'

import styles from './infinity-list-adapter.module.scss'

type Props = {
  type: MovieType
}

export function InfinityListAdapter({ type }: Readonly<Props>) {
  const { qureyFn, queryKey } = useMemo(() => {
    switch (type) {
      case 'popular':
        return {
          queryKey: ['movies', 'infinity-popular'],
          qureyFn: getPopular,
        }
      case 'upcoming':
        return {
          queryKey: ['movies', 'infinity-upcoming'],
          qureyFn: getUpComing,
        }
      case 'top-rated':
        return {
          queryKey: ['movies', 'infinity-top-rated'],
          qureyFn: getTopRated,
        }
    }
  }, [type])

  return (
    <section className={styles.container}>
      <Suspense fallback={<MovieInfinitySkeletonList />}>
        <MovieInfinityList queryKey={queryKey} qureyFn={qureyFn} />
      </Suspense>
    </section>
  )
}
