import styles from '@/entities/ui/movie-content-list.module.scss'
import { OneContent } from '@/entities/ui/OneContent'
import { Content } from '@/shared/api/model'

type Props = {
  contentList: Content[]
}

export function MovieContentList({ contentList }: Props) {
  return (
    <ul className={styles.commentContainer}>
      {contentList.map(content => (
        <OneContent key={content.id} content={content} />
      ))}
    </ul>
  )
}
