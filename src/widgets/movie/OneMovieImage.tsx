import Image from 'next/image'
import Link from 'next/link'

import { getImageUrl } from '@/entities/movie/api'
import { ImageDetails } from '@/entities/movie/model'
import { IMAGE_SIZE } from '@/shared/constants'

type Props = {
  movieId: number | string
  backDrop: ImageDetails
}

export function OneMovieImage({ backDrop, movieId }: Props) {
  return (
    <li>
      <Link href={`/i/image/${movieId}/backdrop/${backDrop.file_path}`} scroll={false}>
        <Image
          src={getImageUrl('backdrop', backDrop.file_path, IMAGE_SIZE.backdrop.w300)}
          alt={'배경 이미지 미리보기'}
          width={280}
          height={140}
        />
      </Link>
    </li>
  )
}
