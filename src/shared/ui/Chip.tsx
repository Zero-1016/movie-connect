import { PropsWithChildren } from "react";

import styles from './chip.module.scss'

export function Chip({ children }: PropsWithChildren) {
    return <span className={styles.container}>{children}</span>
}
