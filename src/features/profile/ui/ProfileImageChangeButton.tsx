'use client'

import { Edit } from '@mui/icons-material'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import { useImageOnChange } from '@/features/profile/hooks'
import { ProfileImage } from '@/shared/ui'

import styles from './profile-image-change-button.module.scss'

type Props = {
  image: string
  nickname: string
}

export function ProfileImageChangeButton({ image, nickname }: Props) {
  const { imgFile, imgRef, onChange } = useImageOnChange()

  return (
    <div className={styles.imageBox}>
      <ProfileImage src={imgFile ?? image} alt={nickname + '프로필 이미지'} sx={{ width: 200, height: 200 }} />
      <motion.label
        animate={{ background: '#fffffe' }}
        whileHover={{ background: '#142132' }}
        className={classNames(styles.button, styles.container)}
        htmlFor="file"
      >
        <Edit />
        <input ref={imgRef} id="file" onChange={onChange} className={styles.inputFile} type={'file'} />
      </motion.label>
    </div>
  )
}
