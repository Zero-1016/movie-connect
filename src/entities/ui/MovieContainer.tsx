import Link from 'next/link'

import { MovieInfo } from '@/entities/model'
import { MovieList } from '@/entities/ui/MovieList'

import * as style from './MovieContainer.css'

type Props = {
  title: string
  description: string
  movieList: MovieInfo[]
  href: string
}

export function MovieContainer({ title, description, href, movieList }: Props) {
  return (
    <div className={style.container}>
      <div className={style.listHeader}>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
        </div>
        <Link className={style.link} href={href}>
          <p>바로가기</p>
        </Link>
      </div>
      <MovieList movieList={movieList} />
    </div>
  )
}
