'use client'

import { Suspense } from 'react'

import { getPopular, getTopRated, getUpComing } from '@/entities/movie/api'
import { MainMovieList } from '@/entities/movie/ui'
import { MOVIE_QUERY_KEY } from '@/shared/constants/QUERY_KEY'
import { RQProvider } from '@/shared/ui'

import styles from './main-bottom-section.module.scss'
import { MainMovieListSkeleton } from './MainMovieListSkeleton'

export function MainBottomSection() {
  return (
    <RQProvider>
      <div className={styles.container}>
        <Suspense fallback={<MainMovieListSkeleton />}>
          <MainMovieList
            title={'사람들에게 인기있는 영화'}
            description={'전 세계 관객들이 사랑하는 영화들을 만나보세요'}
            href={'/list/popular'}
            queryKey={MOVIE_QUERY_KEY.popular('1')}
            queryFn={() => getPopular({ pageParam: 1 })}
          />
        </Suspense>
        <Suspense fallback={<MainMovieListSkeleton />}>
          <MainMovieList
            title={'최신 개봉 영화'}
            description={'개봉 예정인 신작 영화들을 미리 만나보세요'}
            href={'/list/upcoming'}
            queryKey={MOVIE_QUERY_KEY.upComing('1')}
            queryFn={() => getUpComing({ pageParam: 1 })}
          />
        </Suspense>
        <Suspense fallback={<MainMovieListSkeleton />}>
          <MainMovieList
            title={'별점이 높은 영화'}
            description={'평론가와 관객 모두에게 인정받은 최고의 작품들'}
            href={'/list/top-rated'}
            queryKey={MOVIE_QUERY_KEY.topRated('1')}
            queryFn={() => getTopRated({ pageParam: 1 })}
          />
        </Suspense>
      </div>
    </RQProvider>
  )
}
