'use client'

import { Suspense, useState } from 'react'

import { FamousLineList } from '@/entities/content/ui/FamousLineList'
import { ReviewList } from '@/entities/content/ui/ReviewList'
import { FamousLineForm, ReviewForm } from '@/features/detail/ui'

import styles from './detail-movie-content-container.module.scss'

type Props = {
  movieId: string
}

export function DetailMovieContentContainer({ movieId }: Readonly<Props>) {
  const [isReview, setIsReview] = useState(true)

  const filterChange = () => {
    setIsReview(prevState => !prevState)
  }
  return (
    <section className={styles.container}>
      <div className={styles.contentBox}>
        <h3 className={styles.subTitle}>{isReview ? '리뷰 모아보기' : '명대사 모아보기'}</h3>
        <h3 className={styles.changeTitle} onClick={filterChange}>
          {isReview ? '명대사 보기' : '리뷰 보기'}
        </h3>
      </div>
      <Suspense>{isReview ? <ReviewList movieId={movieId} /> : <FamousLineList movieId={movieId} />}</Suspense>
      {isReview ? <ReviewForm movieId={movieId} /> : <FamousLineForm movieId={movieId} />}
    </section>
  )
}
