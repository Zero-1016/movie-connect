'use client'

import { Rating } from '@mui/material'
import { useSuspenseQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { MovieBookMarkButton } from '@/entities/local_movie/ui'
import { getDetail, getImageUrl } from '@/entities/movie/api'
import { IMAGE_SIZE, SITE_PATH } from '@/shared/constants'
import { MOVIE_QUERY_KEY } from '@/shared/constants/QUERY_KEY'
import { Chip, DetailLinkButton } from '@/shared/ui'

import styles from './movie-detail-content.module.scss'

type Props = {
  movieId: string
}

export function MovieDetailContent({ movieId }: Readonly<Props>) {
  const router = useRouter()
  const session = useSession()

  const { data: result } = useSuspenseQuery({
    queryKey: MOVIE_QUERY_KEY.detail(movieId),
    queryFn: getDetail,
  })

  const { poster_path, title, overview, genres, release_date, vote_average } = result

  const onClick = () => {
    router.replace(SITE_PATH.detail(movieId))
  }

  const showImage = () => {
    router.push(SITE_PATH.image_modal(movieId, 'poster', poster_path), {
      scroll: false,
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        {session.data && <MovieBookMarkButton movieId={movieId} size="small" />}
        <Image
          onClick={showImage}
          placeholder={'blur'}
          blurDataURL={getImageUrl('poster', poster_path, IMAGE_SIZE.poster.w92)}
          src={getImageUrl('poster', poster_path, IMAGE_SIZE.poster.w342)}
          width={220}
          height={330}
          alt={title + '포스터 사진'}
        />
      </div>
      <div className={styles.rightSection}>
        <div className={styles.inner}>
          <h2 className={styles.movieTitle}>{title}</h2>
          <span className={styles.description}>{overview}</span>
          <div className={styles.chipBox}>
            {genres.map(genre => (
              <Chip key={genre.id}>{genre.name}</Chip>
            ))}
          </div>
          <div>개봉날짜 : {release_date}</div>
        </div>
        <div className={styles.inner}>
          <div className={styles.ratingBox}>
            <Rating value={Math.ceil(vote_average / 2)} readOnly />
            <span>평균 평점 : {Math.floor(vote_average * 10) / 10}</span>
          </div>
          <DetailLinkButton onClick={onClick} badge={true} size={'small'}>
            GET Detail info
          </DetailLinkButton>
        </div>
      </div>
    </div>
  )
}
