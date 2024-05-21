import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { poppins } from '@/shared/font'

import styles from './submit-button.module.scss'

type Props = ComponentPropsWithoutRef<'button'>

export function SubmitButton({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <button type="submit" className={`${styles.button} ${poppins.className}`} {...rest}>
      {children}
    </button>
  )
}
