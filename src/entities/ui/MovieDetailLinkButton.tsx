"use client"

import classNames from "classnames";
import Image from "next/image";
import { ComponentProps } from "react";

import linkSvg from '../../../public/svg/movie-link.svg'
import styles from './movie-detail-link-button.module.scss'

type Props = {
    badge: boolean
    size: "small" | "medium" | "large" | "full"
} & ComponentProps<'button'>

export function MovieDetailLinkButton({ children, badge, size, ...rest }: Props) {
    return <button className={classNames(styles.button, styles[size])} {...rest}>
        {badge && <Image src={linkSvg} alt={"화살표"}/>}
        {children}</button>
}
