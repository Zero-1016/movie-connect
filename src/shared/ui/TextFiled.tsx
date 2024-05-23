import React, { forwardRef } from 'react'
import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'

import { poppins } from '@/shared/font'

import styles from './text-filed.module.scss'

type Props = {
  icon: ReactNode
  error?: FieldError
} & React.ComponentPropsWithRef<'input'>

export const TextFiled = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', placeholder, icon, error, ...rest }, ref) => {
    return (
      <div>
        <label className={styles.label}>
          {icon}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`${styles.input} ${poppins.className}`}
            {...rest}
          />
        </label>
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    )
  },
)

TextFiled.displayName = 'TextFiled'
