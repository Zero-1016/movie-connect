import { ImageSize, ImageType } from '@/shared/api/constants'
import { env } from '@/shared/types'

export function getImageUrl<T extends ImageType>(type: T, path: string, size: ImageSize<T>) {
  if (typeof size !== 'string') return ''
  return `${env.NEXT_PUBLIC_TMDB_IMAGE_URL}${size}${path}`
}
