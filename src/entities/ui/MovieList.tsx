'use client'

import { MovieInfo } from '@/entities/model'
import { MovieCard } from '@/entities/ui/MovieCard'

import * as style from './MovieList.css'

type Props = {
  movieList: MovieInfo[]
}

export function MovieList({ movieList }: Props) {
  return (
    <>
      <div>default</div>
      <ul className={style.container}>
        {movieList.map(movieData => (
          <li key={movieData.id}>
            <MovieCard movieData={movieData} />
          </li>
        ))}
      </ul>
    </>
  )
}
