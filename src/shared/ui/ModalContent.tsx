"use client"

import { PropsWithChildren } from "react";

import styles from './modal.module.scss'

export function ModalContent({ children }: PropsWithChildren) {

    const onInnerClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return <div onClick={onInnerClick} className={styles.modalContent}>{children}</div>
}
