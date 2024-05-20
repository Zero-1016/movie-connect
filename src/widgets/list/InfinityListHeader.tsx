import { ComponentProps } from 'react'

import { ListPage } from '@/views'

import styles from './infinity-list-header.module.scss'

export function InfinityListHeader({ type }: ComponentProps<typeof ListPage>) {
  let title = ''

  switch (type) {
    case 'popular':
      title = '사람들에게 인기있는 영화'
      break
    case 'top-rated':
      title = '별점이 높은 영화'
      break
    case 'upcoming':
      title = '최신 개봉 영화'
      break
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
    </section>
  )
}
