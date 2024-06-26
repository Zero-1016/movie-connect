'use client'

import classNames from 'classnames'

import { HeaderSearchBar } from '@/features/search/ui'
import { useScrollDown } from '@/shared/hook'

import styles from './header.module.scss'
import { HeaderNav } from './HeaderNav'
import { MainLogo } from './MainLogo'
import { UserStatusButton } from './UserStatusButton'

export function Header() {
  const { isScrollDown } = useScrollDown()

  return (
    <header className={classNames(styles.container, isScrollDown && styles.hidden)}>
      <div className={styles.box}>
        <div className={styles.section}>
          <MainLogo />
          <HeaderNav />
        </div>
        <div className={styles.section}>
          <HeaderSearchBar />
          <UserStatusButton />
        </div>
      </div>
    </header>
  )
}
