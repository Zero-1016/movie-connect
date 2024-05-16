'use client'

import { Edit } from '@mui/icons-material'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { ChangeEventHandler } from 'react'

import styles from './edit-button.module.scss'

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>
}

export function EditButton({ onChange }: Props) {
  return (
    <motion.label
      animate={{ background: '#fffffe' }}
      whileHover={{ background: '#142132' }}
      className={classNames(styles.button, styles.container)}
      htmlFor="file"
    >
      <Edit />
      <input id="file" onChange={onChange} className={styles.inputFile} type={'file'} />
    </motion.label>
  )
}
