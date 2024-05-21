import { PropsWithChildren } from 'react'

import { poppins } from '@/shared/font'

import styles from './submit-button.module.scss'

export function SubmitButton({ children }: PropsWithChildren) {
  return (
    <button type="submit" className={`${styles.button} ${poppins.className}`}>
      {children}
    </button>
  )
}
