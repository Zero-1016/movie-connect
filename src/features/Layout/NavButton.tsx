"use client"

import Button from "@mui/material/Button";
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

import styles from './nav-button.module.scss'

type Props = {
    activeSvg: ReactNode
    notActiveSvg: ReactNode
    link: string,
    title: string,
    activeAllow?: boolean,
}

export function NavButton({ title, notActiveSvg, activeSvg, link, activeAllow = false }: Props) {
    const router = useRouter()
    const path = usePathname();
    const isActive = path === link

    const onClick = () => {
        router.push(link)
    }

    return <Button className={classNames(styles.button, activeAllow && isActive && styles.active)} onClick={onClick}>{isActive ? activeSvg : notActiveSvg}
        <span>{title}</span></Button>
}
