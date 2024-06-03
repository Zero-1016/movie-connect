'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Suspense } from 'react'

import { MovieBookMarkButton } from '@/entities/local_movie/ui'
import { getDetail, getImageUrl } from '@/entities/movie/api'
import { IMAGE_SIZE } from '@/shared/constants'
import { MOVIE_QUERY_KEY } from '@/shared/constants/QUERY_KEY'
import { quando } from '@/shared/font/quando'

import styles from './detail-movie-banner.module.scss'

type Props = {
  movieId: string
}

export function DetailMovieBanner({ movieId }: Readonly<Props>) {
  const session = useSession()
  const { data: result } = useSuspenseQuery({
    queryKey: MOVIE_QUERY_KEY.detail(movieId),
    queryFn: getDetail,
  })

  const { belongs_to_collection, poster_path, backdrop_path, title, original_title } = result

  const imagePath = backdrop_path
    ? getImageUrl('backdrop', backdrop_path, IMAGE_SIZE.backdrop.w1280)
    : getImageUrl('poster', poster_path, IMAGE_SIZE.poster.w780)

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        {session.data && (
          <Suspense fallback={null}>
            <MovieBookMarkButton movieId={movieId} size="medium" />
          </Suspense>
        )}
        <div className={styles.blueBlur} />
        <Image src={imagePath} alt={title + '포스터'} fill={true} style={{ objectFit: 'cover' }} />
      </div>
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0, transition: { duration: 0.5 }, type: 'easeOut' }}
        className={styles.blurBox}
      >
        {belongs_to_collection ? (
          <h3 className={styles.movieSubTitle}>
            {belongs_to_collection.name} <span style={{ color: 'white' }}>/</span> {original_title}
          </h3>
        ) : (
          <h3 className={styles.movieSubTitle}>{original_title}</h3>
        )}
        <h1 className={classNames(styles.movieTitle, quando.className)}>{title}</h1>
      </motion.div>
    </section>
  )
}
