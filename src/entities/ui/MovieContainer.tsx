import { useSuspenseQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { MovieList } from '@/entities/ui/MovieList'
import { MoviesResponse } from '@/shared/api/model'

import styles from './movie-container.module.scss'

type Props = {
  title: string
  description: string
  href: string
  queryKey: string[]
  queryFn: () => Promise<MoviesResponse>
}

export function MovieContainer({ title, description, href, queryKey, queryFn }: Readonly<Props>) {
  const { data } = useSuspenseQuery({
    queryKey,
    queryFn,
  })

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
      <MovieList className={styles.listPadding} movieList={data.results} />
    </div>
  )
}
