import { ComponentPropsWithoutRef } from 'react'

import { poppins } from '@/shared/font'
import { TextFiled } from '@/shared/ui/TextFiled'

import styles from './confirm-field.module.scss'

type Props = {
  confirmAPIFn: () => void
} & ComponentPropsWithoutRef<typeof TextFiled>

export function ConfirmField({ disabled, confirmAPIFn, name, onChange, icon, value, error }: Props) {
  return (
    <div>
      <div className={styles.confirmBox}>
        <label className={styles.label}>
          {icon}
          <input className={`${styles.input} ${poppins.className}`} name={name} value={value} onChange={onChange} />
        </label>
        <button disabled={disabled} onClick={confirmAPIFn} type="button">
          확인
        </button>
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
