import React, { forwardRef, ReactNode } from 'react'
import { ComponentPropsWithRef } from 'react'
import { FieldError } from 'react-hook-form'

import { poppins } from '@/shared/font'

import styles from './confirm-field.module.scss'

type Props = {
  icon: ReactNode
  error?: FieldError
  btnDisabled: boolean
  confirmAPIFn: () => void
} & ComponentPropsWithRef<'input'> // 'input' 유형의 props를 포함시킴

export const ConfirmField = forwardRef<HTMLInputElement, Props>(
  ({ btnDisabled, confirmAPIFn, icon, error, ...rest }, ref) => {
    return (
      <div>
        <div className={styles.confirmBox}>
          <label className={styles.label}>
            {icon}
            <input ref={ref} className={`${styles.input} ${poppins.className}`} {...rest} />
          </label>
          <button disabled={btnDisabled} onClick={confirmAPIFn} type="button">
            확인
          </button>
        </div>
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    )
  },
)

ConfirmField.displayName = 'ConfirmField'
