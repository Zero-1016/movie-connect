import classNames from "classnames";
import { PropsWithChildren } from "react";

import styles from './chip.module.scss'

type Props = {
    className?: string
    size?: "default" | "small"
}

export function Chip({ children, className, size }: PropsWithChildren<Props>) {
    return <span
        className={classNames(size === "default" ? styles.container : styles.smallContainer, className)}>{children}</span>
}
