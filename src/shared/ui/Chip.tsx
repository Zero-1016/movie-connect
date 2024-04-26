import classNames from "classnames";
import { PropsWithChildren } from "react";

import styles from './chip.module.scss'

type Props = {
    className?: string
}

export function Chip({ children, className }: PropsWithChildren<Props>) {
    return <span className={classNames(styles.container, className)}>{children}</span>
}
