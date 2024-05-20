import { Content } from '@/entities/movie/model'
import { ProfileImage } from '@/shared/ui'
import { timeAgo } from '@/shared/util'

import styles from './one-movie-content.module.scss'

type Props = {
  content: Content
}

export function OneMovieContent({ content: { id, writer, content, createAt } }: Props) {
  return (
    <li className={styles.comment} key={id}>
      <div className={styles.commentHeader}>
        <div className={styles.commentAvatar}>
          <ProfileImage src={writer.profileUrl || ''} alt={writer.nickname} /> {writer.nickname}
        </div>
        <div>{timeAgo(new Date(createAt))}</div>
      </div>
      <div>{content}</div>
    </li>
  )
}
