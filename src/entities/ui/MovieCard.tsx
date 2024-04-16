'use client'

import Image from 'next/image'
import { useState } from 'react'

import { getImageUrl } from '@/entities/lib/getImageUrl'
import { MovieInfo } from '@/entities/model'

import styles from './movie-card.module.scss'

type Props = {
  movieData: MovieInfo
}

export function MovieCard({ movieData }: Props) {
  const { title, backdrop_path, poster_path } = movieData
  const [isHover, setIsHover] = useState(false)

  const onMouseOver = () => {
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={styles.container}>
      <Image className={styles.poster} src={getImageUrl(poster_path)} alt={title + '의 이미지'} fill={true} />
      <div className={styles.movieCardBody}>ddd</div>
    </div>
  )
}
