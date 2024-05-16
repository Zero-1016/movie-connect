'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import { IMAGE_SIZE, QUERY_KEY } from '@/shared/api/constants'
import { getImages, getImageUrl } from '@/shared/api/lib'
import { useDragHandler } from '@/shared/hook'

import styles from './movie-images-slide.module.scss'

type Props = {
  movieId: string
}

export function MovieImagesSlide({ movieId }: Readonly<Props>) {
  const queryKey = QUERY_KEY.images(movieId) as [string, string, string]
  const { data: ImageList } = useSuspenseQuery({
    queryKey: queryKey,
    queryFn: getImages,
  })

  const { ref, onMouseDown } = useDragHandler()

  const backDropList = ImageList.backdrops.slice(0, 20)

  return (
    <section className={styles.container}>
      <h3 className={styles.subTitle}>장면 미리보기</h3>
      {backDropList.length > 0 && (
        <ul className={styles.backDropList} onMouseDown={onMouseDown} ref={ref}>
          {backDropList.map(backDrop => (
            <Link key={backDrop.file_path} href={`/i/image/${movieId}/backdrop/${backDrop.file_path}`} scroll={false}>
              <Image
                src={getImageUrl('backdrop', backDrop.file_path, IMAGE_SIZE.backdrop.w300)}
                alt={'배경 이미지 미리보기'}
                width={280}
                height={140}
              />
            </Link>
          ))}
        </ul>
      )}
    </section>
  )
}
