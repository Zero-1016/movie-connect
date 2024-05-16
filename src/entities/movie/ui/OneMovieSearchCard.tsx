import Image from 'next/image'
import Link from 'next/link'

import { getImageUrl, getMovieGenre } from '@/entities/movie/api'
import { Movie } from '@/entities/movie/model/movie'
import { IMAGE_SIZE, SITE_PATH } from '@/shared/constants'
import { Chip } from '@/shared/ui'

import styles from './one-movie-search-card.module.scss'

type Props = {
  movieData: Movie
}

export function OneMovieSearchCard({ movieData }: Props) {
  const { id, backdrop_path, poster_path, title, genre_ids, overview } = movieData
  return (
    <li className={styles.container}>
      <div className={styles.box}>
        <div className={styles.imageBox}>
          <Image
            className={styles.image}
            src={
              backdrop_path
                ? getImageUrl('backdrop', backdrop_path, IMAGE_SIZE.backdrop.w780)
                : poster_path
                  ? getImageUrl('poster', poster_path, IMAGE_SIZE.poster.w342)
                  : ''
            }
            alt={title + '배너 이미지'}
            width={300}
            height={150}
          />
          <div className={styles.backGroundLinear} />
        </div>
        <div className={styles.movieInfoBox}>
          <Link href={SITE_PATH.movie_modal(id)} scroll={false}>
            <Image width={30} height={30} src="/svg/movie-info.svg" alt={'무비 영화정보'} />
          </Link>
          <div className={styles.genreBox}>
            {genre_ids.map(genreId => (
              <Chip key={genreId} className={styles.chip}>
                {getMovieGenre(genreId)}
              </Chip>
            ))}
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.overview}>{overview}</div>
        </div>
      </div>
    </li>
  )
}
