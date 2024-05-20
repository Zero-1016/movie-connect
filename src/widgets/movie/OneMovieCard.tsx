'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

import { getMovieGenre } from '@/entities/movie/api'
import { getImageUrl } from '@/entities/movie/api/getImageUrl'
import { Movie } from '@/entities/movie/model'
import { IMAGE_SIZE } from '@/shared/constants'
import { Chip } from '@/shared/ui'

import styles from './one-movie-card.module.scss'

type Props = {
  movieData: Movie
  size?: 'small' | 'default'
}

export function OneMovieCard({ movieData, size = 'default' }: Props) {
  const { title, release_date, poster_path, adult, genre_ids, id, backdrop_path } = movieData
  const { width, height, src } = useMemo(() => {
    switch (size) {
      case 'default':
        if (poster_path) {
          return {
            width: 280,
            height: 420,
            src: getImageUrl('poster', poster_path, IMAGE_SIZE.poster.w342),
          }
        } else if (backdrop_path) {
          return {
            width: 280,
            height: 420,
            src: getImageUrl('backdrop', backdrop_path, IMAGE_SIZE.backdrop.w780),
          }
        } else {
          return { width: 280, height: 420, src: '' }
        }
      case 'small':
        if (poster_path) {
          return {
            width: 185,
            height: 278,
            src: getImageUrl('poster', poster_path, IMAGE_SIZE.poster.w185),
          }
        } else if (backdrop_path) {
          return {
            width: 185,
            height: 278,
            src: getImageUrl('backdrop', backdrop_path, IMAGE_SIZE.backdrop.w300),
          }
        } else {
          return { width: 185, height: 278, src: '' }
        }
    }
  }, [size, poster_path, backdrop_path])

  return (
    <li className={styles.card}>
      <Link href={`/i/info/${id}`} scroll={false}>
        <motion.div
          whileHover={{ y: -10, scale: 1.02, zIndex: 5 }}
          className={size === 'default' ? styles.container : styles.smallContainer}
        >
          <Image className={styles.poster} width={width} height={height} src={src} alt={title + '의 이미지'} />
          <div className={styles.movieInfoBackGround}>
            <div className={styles.movieInfo}>
              <h4 className={classNames(styles.movieTitle, size === 'small' && styles.movieSmallTitle)}>{title}</h4>
              <h5 className={size === 'small' ? styles.smallReleaseDate : ''}>{release_date}</h5>
              {adult && <span>18+</span>}
              <div className={styles.genreContainer}>
                {genre_ids.map(genre => (
                  <Chip size={size} key={genre}>
                    {getMovieGenre(genre)}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </li>
  )
}
