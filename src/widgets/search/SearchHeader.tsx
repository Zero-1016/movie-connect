'use client'

import classNames from 'classnames'

import { notoSans } from '@/shared/style'

import styles from './search-header.module.scss'

type Props = {
  keyword: string
}

export function SearchHeader({ keyword }: Props) {
  return (
    <section className={classNames(styles.container, notoSans.className)}>
      <span className={styles.resultResponse}>다음 문구를 검색한 결과입니다 :</span>
      <span className={styles.resultKeyword}>{'"' + keyword + '"'}</span>
    </section>
  )
}
