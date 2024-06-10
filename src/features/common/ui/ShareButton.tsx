import { IconButton } from '@mui/material'
import { Share2 } from 'lucide-react'

import { copyLink } from '@/features/common/lib'

import styles from './share-button.module.scss'

type Props = {
  url: string
  classNames: string
}

export function ShareButton({ url, classNames }: Props) {
  const onclick = async () => {
    await copyLink(url)
  }
  return (
    <IconButton className={classNames}>
      <Share2 onClick={onclick} className={styles.shareButton} />
    </IconButton>
  )
}
