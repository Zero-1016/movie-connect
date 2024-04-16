import { useSuspenseQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { ResponseData } from '@/entities/model'
import { MovieList } from '@/entities/ui/MovieList'

import styles from './movie-container.module.scss'

type Props = {
  title: string
  description: string
  href: string
  queryInfo: {
    queryKey: [string, string, number]
    queryFn: (page?: number) => Promise<ResponseData>
  }
}

export function MovieContainer({ title, description, href, queryInfo }: Props) {
  const { queryKey, queryFn } = queryInfo
  const { data } = useSuspenseQuery({
    queryKey: queryKey,
    queryFn: () => queryFn(),
  })

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <div>
          <h2 className={styles.movieTitle}>{title}</h2>
          <h3 className={styles.movieSubTitle}>{description}</h3>
        </div>
        <Link className={styles.link} href={href}>
          <p>바로가기</p>
        </Link>
      </div>
      <MovieList movieList={data.results} />
    </div>
  )
}
