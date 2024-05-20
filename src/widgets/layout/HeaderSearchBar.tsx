'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { SITE_PATH } from '@/shared/constants'
import { quando } from '@/shared/font/quando'

import styles from './header-search-bar.module.scss'

export function HeaderSearchBar() {
  const [isFocus, setIsFocus] = useState(false)
  const router = useRouter()

  const onSubmit = (e: FormData) => {
    const keyword = e.get('keyword')

    if (typeof keyword !== 'string') return

    router.push(SITE_PATH.search(keyword))
  }

  const resetValue = () => {
    const input = document.getElementById('keyword') as HTMLInputElement
    input.value = ''
  }

  const onFocus = () => {
    setIsFocus(true)
  }

  const onBlur = () => {
    setIsFocus(false)
  }

  return (
    <form action={onSubmit} className={classNames(styles.container, isFocus && styles.hover)}>
      <label htmlFor="keyword" className={styles.label}>
        <div className={styles.inputBox}>
          <Image className={styles.icon} src="/svg/serach.svg" width={20} height={20} alt="검색 아이콘" />
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder="관심있는 영화제목을 입력하세요"
            id="keyword"
            name="keyword"
            className={classNames(styles.search, quando.className)}
            type={'search'}
          />
        </div>
        <Image onClick={resetValue} src="/svg/close.svg" alt="일괄 지우기 아이콘" width={20} height={20} />
      </label>
    </form>
  )
}
