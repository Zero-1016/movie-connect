"use client"

import { useProfilePath } from "@/features/profile/hooks";

import styles from './profile-title.module.scss'

export function ProfileTitle() {
    const { title, subTitle } = useProfilePath()
    return <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subTitle}>{subTitle}</h3>
    </div>
}
