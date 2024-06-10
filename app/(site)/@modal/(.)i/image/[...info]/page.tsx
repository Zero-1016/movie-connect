import { Metadata } from 'next'

import { MovieImageModal } from '@/widgets/modal'

export const metadata: Metadata = {
  title: 'preview image',
  description: 'preview image',
}

type Props = {
  params: { info: [movieId: string, 'poster' | 'backdrop', imageUrl: string] }
}

export default function Page({ params }: Props) {
  return <MovieImageModal movieId={params.info[0]} imageType={params.info[1]} imageUrl={params.info[2]} />
}
