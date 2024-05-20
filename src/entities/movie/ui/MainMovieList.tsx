import { useSuspenseQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { MoviesResponse } from '@/entities/movie/model'
import { useDragHandler } from '@/shared/hook'
import { OneMovieCard } from '@/widgets/movie'

import styles from './main-movie-list.module.scss'

type Props = {
  title: string
  description: string
  href: string
  queryKey: string[]
  queryFn: () => Promise<MoviesResponse>
}

export function MainMovieList({ title, description, href, queryKey, queryFn }: Readonly<Props>) {
  const { data } = useSuspenseQuery({
    queryKey,
    queryFn,
  })
  const { ref, onMouseDown } = useDragHandler()

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <div>
          <h2 className={styles.movieTitle}>{title}</h2>
          <h3 className={styles.movieSubTitle}>{description}</h3>
        </div>
        <Link className={styles.link} href={href}>
          <p>더보기</p>
        </Link>
      </div>
      <ul onMouseDown={onMouseDown} ref={ref} className={styles.movieList}>
        {data.results.map(movieData => (
          <OneMovieCard key={movieData.id} movieData={movieData} />
        ))}
      </ul>
    </div>
  )
}
