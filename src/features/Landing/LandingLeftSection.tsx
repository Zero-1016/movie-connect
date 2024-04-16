import classNames from 'classnames'

import { subTitleList } from '@/features/Landing/constants'
import { GithubIcon } from '@/features/Landing/GithubIcon'
import { HomeButton } from '@/features/Landing/HomeButton'
import { SubTitle } from '@/features/Landing/SubTitle'
import { poppins } from '@/shared/poppins'

import styles from './landing-left-section.module.scss'

export function LandingLeftSection() {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.title, poppins.className)}>Movie Connect</div>
      <SubTitle subTitleList={subTitleList} />
      <HomeButton />
      <div className={styles.links}>
        <GithubIcon href="https://github.com/movie-connect/client" />
        <GithubIcon href="https://github.com/movie-connect/server" />
      </div>
    </div>
  )
}
