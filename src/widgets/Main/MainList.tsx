'use client'

import { Suspense } from 'react'

import { getPopular, getTopRated, getUpComing } from '@/entities/lib'
import { MovieContainer } from '@/entities/ui'
import RQProvider from '@/shared/lib/RQProvider'

export function MainList() {
  const getUpComingInfo = {
    queryKey: ['movies', 'popular'],
    queryFn: getUpComing,
  }
  const getTopRatedInfo = {
    queryKey: ['movies', 'topRated'],
    queryFn: getTopRated,
  }
  const getPopularInfo = {
    queryKey: ['movies', 'upcoming'],
    queryFn: getPopular,
  }

  return (
    <div>
      <RQProvider>
        <Suspense>
          <MovieContainer
            title={'지금 인기있는 영화'}
            description={'인기있는 영화를 지금 바로 만나보세요!'}
            href={'/new_movie'}
            queryInfo={getPopularInfo}
          />
        </Suspense>
        <Suspense>
          <MovieContainer
            title={'기대 예정중인 영화'}
            description={'상영 예정인 영화를 미리 만나보세요!'}
            href={'/new_movie'}
            queryInfo={getUpComingInfo}
          />
        </Suspense>
        <Suspense>
          <MovieContainer
            title={'인기가 많은 영화'}
            description={'과거부터 인기가 많은 영화를 다시 확인해보세요'}
            href={'/new_movie'}
            queryInfo={getTopRatedInfo}
          />
        </Suspense>
      </RQProvider>
    </div>
  )
}
