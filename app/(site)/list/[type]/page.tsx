import { notFound } from 'next/navigation'

import { MovieType } from '@/shared/api/model/movie-info'
import RQProvider from '@/shared/lib/react-query/RQProvider'
import { InfinityListPage } from '@/views'

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
          <InfinityListPage type={type} />
        </RQProvider>
      )
    default:
      notFound()
      return null
  }
}
