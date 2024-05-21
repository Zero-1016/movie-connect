import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { poppins } from '@/shared/font'

import styles from './text-filed.module.scss'

type Props = {
  icon: ReactNode
  error?: string
} & ComponentPropsWithoutRef<'input'>

export function TextFiled({ type = 'text', name, onChange, icon, value, error }: Props) {
  return (
    <div>
      <label className={styles.label}>
        {icon}
        <input
          type={type}
          className={`${styles.input} ${poppins.className}`}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
