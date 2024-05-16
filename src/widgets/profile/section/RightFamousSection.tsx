import { generateContents } from '@/entities/mock/generate'
import { OneMovieContent } from '@/entities/movie/ui'
import { ProfileTitle } from '@/widgets/profile/ui/ProfileTitle'

import styles from './movie-content.module.scss'

type Props = {
  page: string
}

export function FamousBody({}: Readonly<Props>) {
  const contentList = generateContents(10)

  return (
    <section>
      <ProfileTitle />
      <div style={{ padding: '20px 0 50px' }}>
        <ul className={styles.commentContainer}>
          {contentList.map(content => (
            <OneMovieContent key={content.id} content={content} />
          ))}
        </ul>
      </div>
    </section>
  )
}
