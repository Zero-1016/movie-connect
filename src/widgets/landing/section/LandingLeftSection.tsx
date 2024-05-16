'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'

import { poppins } from '@/shared/font'
import { HomeButton } from '@/shared/ui/HomeButton'
import { subTitleList } from '@/widgets/landing/constants/subtitle'
import { SubTitle } from '@/widgets/landing/ui/SubTitle'

import styles from './landing-left-section.module.scss'

export function LandingLeftSection() {
  return (
    <div className={styles.container}>
      <motion.div className={classNames(styles.title, poppins.className)}>Movie Connect</motion.div>
      <SubTitle subTitleList={subTitleList} />
      <HomeButton />
    </div>
  )
}
