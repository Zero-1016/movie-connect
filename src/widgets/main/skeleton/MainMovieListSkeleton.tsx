import { Skeleton } from '@mui/material'

import { MovieListSkeleton } from '@/widgets/movie/skeleton/MovieListSkeleton'

import styles from './main-movie-list-skeleton.module.scss'

export function MainMovieListSkeleton() {
  return (
    <div className={styles.containerSkeleton}>
      <div className={styles.listHeaderSkeleton}>
        <div className={styles.listHeaderFlex}>
          <h2 className={styles.movieTitleSkeleton}>
            <Skeleton variant="rounded" sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }} />
          </h2>
          <h3 className={styles.movieSubTitleSkeleton}>
            <Skeleton variant="rounded" sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }} />
          </h3>
        </div>
        <div className={styles.linkSkeleton}>
          <Skeleton variant="rounded" sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }} />
        </div>
      </div>
      <MovieListSkeleton />
    </div>
  )
}
