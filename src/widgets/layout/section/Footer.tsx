import classNames from 'classnames'
import Image from 'next/image'

import { notoSans } from '@/shared/font'

import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={classNames(styles.box, notoSans.className)}>
        <Image src="/svg/main-title-logo.svg" alt={'사이트로고'} width={300} height={60} />
        <h2>Movie Connect provides a good choice for people who have mixed tastes in movies.</h2>
        <div className={styles.linkBox}>
          <a href="https://github.com/studingsj" target="_blank">
            Backend studingsj
          </a>
          <a href="https://github.com/Zero-1016" target="_blank">
            Frontend Zero-1016
          </a>
          <a href="https://github.com/Zero-1016" target="_blank">
            Design Zero-1016
          </a>
        </div>
        <span>© Movie Connect, This site is a gift for movie lovers</span>
      </div>
    </footer>
  )
}
