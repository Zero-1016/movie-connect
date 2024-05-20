import { generateMovie } from '@/entities/mock/generate'
import { OneMovieCard } from '@/widgets/movie'
import { ProfileTitle } from '@/widgets/profile/ProfileTitle'

import styles from './right-like-section.module.scss'

type Props = {
  page: string
}

const { results } = generateMovie(10)

export function LikeBody({}: Readonly<Props>) {
  return (
    <section>
      <ProfileTitle />
      <ul className={styles.movieContainer}>
        {results.map(item => (
          <OneMovieCard size="small" key={item.id} movieData={item} />
        ))}
      </ul>
    </section>
  )
}
