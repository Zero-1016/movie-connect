import { IMAGE_SIZE } from '@/shared/constants'

export type ImageDetails = {
  aspect_ratio: number
  height: number
  iso_639_1?: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export type Backdrop = ImageDetails

export type Logo = ImageDetails & {
  iso_639_1: string
}

export type Poster = ImageDetails

export type ImageType = keyof typeof IMAGE_SIZE
export type ImageSize<T extends ImageType> = keyof (typeof IMAGE_SIZE)[T]
