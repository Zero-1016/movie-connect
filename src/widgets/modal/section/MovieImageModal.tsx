import { Skeleton } from '@mui/material'
import Image from 'next/image'
import { Suspense } from 'react'

import { getImageUrl } from '@/entities/movie/api'
import { Modal } from '@/shared/ui/Modal'

import styles from './movie-image-modal.module.scss'

type Props = {
  movieId: string
  imageType: 'backdrop' | 'poster'
  imageUrl: string
}

export function MovieImageModal({ imageUrl, imageType, movieId }: Props) {
  const size = {
    backdrop: {
      width: 1080,
      height: 607,
    },
    poster: {
      width: 500,
      height: 750,
    },
  }

  const imageSrc =
    imageType === 'backdrop'
      ? getImageUrl(imageType, '/' + imageUrl, 'w1280')
      : getImageUrl(imageType, '/' + imageUrl, 'w500')

  return (
    <Modal isClose>
      <div className={styles.container}>
        <Suspense
          fallback={
            <Skeleton
              variant="rectangular"
              width={size[imageType].width}
              height={size[imageType].height}
              sx={{
                backgroundColor: 'rgba(255,255,255, 30%)',
              }}
            />
          }
        >
          <Image
            src={imageSrc}
            alt={movieId + imageType}
            width={size[imageType].width}
            height={size[imageType].height}
          />
        </Suspense>
      </div>
    </Modal>
  )
}
