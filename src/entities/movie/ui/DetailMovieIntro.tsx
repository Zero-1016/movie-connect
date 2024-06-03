'use client'
import { useSuspenseQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getDetail, getImageUrl } from '@/entities/movie/api'
import { IMAGE_SIZE, MOVIE_QUERY_KEY } from '@/shared/constants'
import { poppins } from '@/shared/font'
import { Chip } from '@/shared/ui'
import { getDecimal, getHour } from '@/shared/util'

import styles from './detail-movie-intro-section.module.scss'

type Props = {
  movieId: string
}

export function DetailMovieIntro({ movieId }: Readonly<Props>) {
  const { data: result } = useSuspenseQuery({
    queryKey: MOVIE_QUERY_KEY.detail(movieId),
    queryFn: getDetail,
  })

  const { poster_path, title, tagline, overview, runtime, release_date, genres, vote_average } = result

  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <Link href={`/i/image/${movieId}/poster/${poster_path}`} scroll={false}>
          <Image
            className={styles.posterImage}
            src={getImageUrl('poster', poster_path, IMAGE_SIZE.poster.w500)}
            alt={title + '포스터 이미지'}
            width={480}
            height={720}
          />
        </Link>
      </div>
      <div className={classNames(styles.rightSection, poppins.className)}>
        <h3 className={styles.tagLine}>{tagline || title}</h3>
        <span className={styles.description}>{overview}</span>
        <div className={styles.averageBox}>
          <Chip className={styles.chip}>
            <StarIcon size={20} stroke="#FFAD49" /> {getDecimal(vote_average)}
          </Chip>
        </div>
        <h6 className={styles.descriptionTitle}>상영 날짜</h6>
        <h5 className={styles.descriptionContent}>{release_date}</h5>
        <h6 className={styles.descriptionTitle}>재생 시간</h6>
        <h5 className={styles.descriptionContent}>{getHour(runtime)}</h5>
        <h6 className={styles.descriptionTitle}>장르</h6>
        <h5 className={styles.descriptionContent}>{genres.map(genre => genre.name).join(', ')}</h5>
      </div>
    </section>
  )
}
