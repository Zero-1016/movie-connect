import classNames from 'classnames'

import { MovieCard } from '@/entities/ui/MovieCard'
import { MovieInfo } from '@/shared/api/model'
import { useDragHandler } from '@/shared/hook'

import styles from './movie-list.module.scss'

type Props = {
  movieList: MovieInfo[]
  className?: string
}

export function MovieList({ movieList, className }: Props) {
  const { ref, onMouseDown } = useDragHandler()

  return (
    <ul onMouseDown={onMouseDown} ref={ref} className={classNames(styles.container, className)}>
      {movieList.map(movieData => (
        <li className={styles.card} key={movieData.id}>
          <MovieCard movieData={movieData} />
        </li>
      ))}
    </ul>
  )
}
