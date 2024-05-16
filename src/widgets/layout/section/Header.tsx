'use client'

import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { GuestButtons } from '@/widgets/layout/ui/GuestButtons'
import { HeaderNav } from '@/widgets/layout/ui/HeaderNav'
import { HeaderSearchBar } from '@/widgets/layout/ui/HeaderSearchBar'
import { MainLogo } from '@/widgets/layout/ui/MainLogo'
import { UserButton } from '@/widgets/layout/ui/UserButton'

import styles from './header.module.scss'

export function Header() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const isLogin = false

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 500) {
        setIsHeaderHidden(true)
      } else {
        setIsHeaderHidden(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={classNames(styles.container, isHeaderHidden && styles.hidden)}>
      <div className={styles.box}>
        <div className={styles.section}>
          <MainLogo />
          <HeaderNav />
        </div>
        <div className={styles.section}>
          <HeaderSearchBar />
          {isLogin ? <UserButton /> : <GuestButtons />}
        </div>
      </div>
    </header>
  )
}
