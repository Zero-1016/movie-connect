import { notFound } from 'next/navigation'

import { MovieType } from '@/entities/movie/model/movie'
import { RQProvider } from '@/shared/ui'
import { ListPage } from '@/views'

type Props = {
  params: {
    type: MovieType | string
  }
}

export default function Page({ params: { type } }: Props) {
  switch (type) {
    case 'popular':
    case 'upcoming':
    case 'top-rated':
      return (
        <RQProvider>
          <ListPage type={type} />
        </RQProvider>
      )
    default:
      notFound()
      return null
  }
}
