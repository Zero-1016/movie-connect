import { Skeleton } from '@mui/material'
import classNames from 'classnames'

import styles from './movie-list-skeleton.module.scss'

type Props = {
  className?: string
}

export function MovieListSkeleton({ className }: Props) {
  return (
    <ul className={classNames(styles.container, className)}>
      {Array.from({ length: 4 }).map((v, i) => (
        <li className={styles.card} key={i}>
          <Skeleton variant="rounded" sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }} />
        </li>
      ))}
    </ul>
  )
}
