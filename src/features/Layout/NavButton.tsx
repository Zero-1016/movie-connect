"use client"

import Button from "@mui/material/Button";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

import styles from './nav-button.module.scss'

type Props = {
    activeSvg: ReactNode
    notActiveSvg: ReactNode
    link: string,
    title: string
}

export function NavButton({ title, notActiveSvg, activeSvg, link }: Props) {
    const router = useRouter()
    const path = usePathname();
    const isActive = path === link

    const onClick = () => {
        router.push(link)
    }

    return <Button className={styles.button} onClick={onClick}>{isActive ? activeSvg : notActiveSvg} <span>{title}</span></Button>
}
