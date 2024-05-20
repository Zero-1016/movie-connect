'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'

import { LANDING_TITLE } from '@/shared/constants'
import { poppins } from '@/shared/font'
import { HomeButton } from '@/shared/ui'
import { SubTitle } from '@/widgets/landing/SubTitle'

import styles from './landing-contents.module.scss'

export function LandingContents() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <motion.div className={classNames(styles.title, poppins.className)}>Movie Connect</motion.div>
        <SubTitle subTitleList={LANDING_TITLE} />
        <HomeButton />
      </div>
    </section>
  )
}
