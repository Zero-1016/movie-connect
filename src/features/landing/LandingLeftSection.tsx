"use client"

import classNames from 'classnames'
import { motion } from 'framer-motion'

import { subTitleList } from '@/features/landing/constants'
import { HomeButton } from '@/features/landing/HomeButton'
import { SubTitle } from '@/features/landing/SubTitle'
import { poppins } from '@/shared/style/poppins'

import styles from './landing-left-section.module.scss'

export function LandingLeftSection() {
    return (
        <div className={styles.container}>
            <motion.div className={classNames(styles.title, poppins.className)}>Movie Connect</motion.div>
            <SubTitle subTitleList={subTitleList}/>
            <HomeButton/>
        </div>
    )
}
