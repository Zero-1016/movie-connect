import { Input, InputLabel } from '@mui/material'

import styles from './user-change-filed.module.scss'

type Props = {
  email: string
}

export function UserEmailFiled({ email }: Props) {
  return (
    <InputLabel className={styles.labelBox}>
      <span className={styles.labelName}>이메일</span>
      <Input className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={email} disabled />
    </InputLabel>
  )
}
