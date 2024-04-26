import classNames from 'classnames'

import { subTitleList } from '@/features/Landing/constants'
import { HomeButton } from '@/features/Landing/HomeButton'
import { SubTitle } from '@/features/Landing/SubTitle'
import { poppins } from '@/shared/style/poppins'

import styles from './landing-left-section.module.scss'

export function LandingLeftSection() {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.title, poppins.className)}>Movie Connect</div>
      <SubTitle subTitleList={subTitleList} />
      <HomeButton />
    </div>
  )
}
