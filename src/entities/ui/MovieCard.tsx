import Image from 'next/image'

import { getImageUrl } from '@/entities/lib/getImageUrl'
import { MovieInfo } from '@/entities/model'

import * as style from './MovieCard.css'

type Props = {
  movieData: MovieInfo
}

export function MovieCard({ movieData }: Props) {
  const { title, backdrop_path, poster_path } = movieData
  return (
    <div className={style.container}>
      <Image src={getImageUrl(poster_path)} alt={title + '의 이미지'} fill={true} />
    </div>
  )
}
