'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { searchKeywordSchema } from '@/features/search/schema'
import { SITE_PATH } from '@/shared/constants'
import { quando } from '@/shared/font'

import styles from './header-search-bar.module.scss'

export function HeaderSearchBar() {
  const [isFocus, setIsFocus] = useState(false)
  const router = useRouter()

  const onSubmit: SubmitHandler<z.infer<typeof searchKeywordSchema>> = async ({ search }) => {
    router.push(SITE_PATH.search(search))
  }

  const { handleSubmit, register, reset } = useForm<z.infer<typeof searchKeywordSchema>>({
    resolver: zodResolver(searchKeywordSchema),
    defaultValues: {
      search: '',
    },
  })

  const onFocus = () => {
    setIsFocus(true)
  }

  const onBlur = () => {
    setIsFocus(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames(styles.container, isFocus && styles.hover)}>
      <label onBlur={onBlur} htmlFor="keyword" className={styles.label}>
        <div className={styles.inputBox}>
          <Image className={styles.icon} src="/svg/serach.svg" width={20} height={20} alt="검색 아이콘" />
          <input
            onFocus={onFocus}
            placeholder="관심있는 영화제목을 입력하세요"
            id="keyword"
            className={classNames(styles.search, quando.className)}
            type={'search'}
            {...register('search')}
          />
        </div>
        <Image onClick={() => reset()} src="/svg/close.svg" alt="일괄 지우기 아이콘" width={20} height={20} />
      </label>
    </form>
  )
}
