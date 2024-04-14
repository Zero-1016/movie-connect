import { useSuspenseQuery } from '@tanstack/react-query'
import Link from 'next/link'

import { ResponseData } from '@/entities/model'
import { MovieList } from '@/entities/ui/MovieList'

import * as style from './MovieContainer.css'

type Props = {
  title: string
  description: string
  href: string
  queryInfo: {
    queryKey: string[]
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
      <MovieList movieList={data.results} />
    </div>
  )
}
