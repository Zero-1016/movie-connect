'use client'

import { generateContents } from '@/entities/mock/generate'
import { OneMovieContent } from '@/entities/movie/ui'
import { DetailContentForm } from '@/features/detail/DetailContentForm'

import styles from './detail-movie-content-container.module.scss'

type Props = {
  movieId: string
}

export function DetailMovieContentContainer({}: Readonly<Props>) {
  const comments = generateContents(4)

  return (
    <section className={styles.container}>
      <h3 className={styles.subTitle}>리뷰 모아보기</h3>
      {comments && (
        <ul className={styles.commentContainer}>
          {comments.map(content => (
            <OneMovieContent key={content.id} content={content} />
          ))}
        </ul>
      )}
      <DetailContentForm />
    </section>
  )
}
