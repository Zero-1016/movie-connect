import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import styles from './button.module.scss'

type Props = ComponentPropsWithoutRef<'button'>

export function Button({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <div className={styles.container}>
      <button className={styles.button} {...rest}>
        {children}
      </button>
    </div>
  )
}
