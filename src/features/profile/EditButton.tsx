'use client'

import { Edit } from '@mui/icons-material'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { ChangeEventHandler, Dispatch, SetStateAction } from 'react'

import styles from './edit-button.module.scss'

type Props = {
  setFile: Dispatch<SetStateAction<File | null>>
}

export function EditButton(props: Props) {
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const target = e.target.files
    if (target === null) return
    props.setFile(target[0])
    e.target.value = ''
  }

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
