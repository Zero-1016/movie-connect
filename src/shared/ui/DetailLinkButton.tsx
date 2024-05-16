'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ComponentProps, PropsWithChildren } from 'react'

import styles from './detail-link-button.module.scss'

type Props = {
  badge: boolean
  size: 'small' | 'medium' | 'large' | 'full'
} & ComponentProps<typeof motion.button>

export function DetailLinkButton({ children, badge, size, ...rest }: PropsWithChildren<Props>) {
  return (
    <motion.button whileHover={{ scale: 1.05 }} className={classNames(styles.button, styles[size])} {...rest}>
      {badge && <Image src="/svg/movie-link.svg" alt={'화살표'} width={16} height={16} />}
      {children}
    </motion.button>
  )
}
