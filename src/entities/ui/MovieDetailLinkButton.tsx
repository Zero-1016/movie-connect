"use client"

import classNames from "classnames";
import { motion } from 'framer-motion'
import Image from "next/image";
import { ComponentProps, PropsWithChildren } from "react";

import linkSvg from '../../../public/svg/movie-link.svg'
import styles from './movie-detail-link-button.module.scss'

type Props = {
    badge: boolean
    size: "small" | "medium" | "large" | "full"
} & ComponentProps<typeof motion.button>

export function MovieDetailLinkButton({ children, badge, size, ...rest }: PropsWithChildren<Props>) {
    return (
        <motion.button whileHover={{ scale: 1.05 }} className={classNames(styles.button, styles[size])} {...rest}>
            {badge && <Image src={linkSvg} alt={"화살표"}/>}
            {children}
        </motion.button>
    )
}
