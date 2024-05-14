import { ImageSize, ImageType } from '@/shared/api/constants'

export function getImageUrl<T extends ImageType>(type: T, path: string, size: ImageSize<T>) {
  if (typeof size !== 'string') return ''
  return `${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${size}${path}`
}
