'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { getImages } from '@/entities/movie/api'
import { OneMovieImage } from '@/entities/movie/ui'
import { MOVIE_QUERY_KEY } from '@/shared/constants'
import { useDragHandler } from '@/shared/hook'

import styles from './detail-movie-image.container.module.scss'

type Props = {
  movieId: string
}

export function DetailMovieImageContainer({ movieId }: Readonly<Props>) {
  const queryKey = MOVIE_QUERY_KEY.images(movieId) as [string, string, string]
  const { data } = useSuspenseQuery({
    queryKey: queryKey,
    queryFn: getImages,
  })

  const ImageList = data.backdrops.slice(0, 20)
  const { ref, onMouseDown } = useDragHandler()

  return (
    <section className={styles.container}>
      <h3 className={styles.subTitle}>장면 미리보기</h3>
      {ImageList && (
        <ul className={styles.backDropList} onMouseDown={onMouseDown} ref={ref}>
          {ImageList.map(image => (
            <OneMovieImage key={image.file_path} movieId={movieId} backDrop={image} />
          ))}
        </ul>
      )}
    </section>
  )
}
