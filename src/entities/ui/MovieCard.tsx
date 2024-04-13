'use client'

import Image from 'next/image'
import { useState } from 'react'

import { getImageUrl } from '@/entities/lib/getImageUrl'
import { MovieInfo } from '@/entities/model'

import * as style from './MovieCard.css'

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
    <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={style.container}>
      <Image className={style.poster} src={getImageUrl(poster_path)} alt={title + '의 이미지'} fill={true} />
      <div className={style.movieCardBody}>ddd</div>
    </div>
  )
}
