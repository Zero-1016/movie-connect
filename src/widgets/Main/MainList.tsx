import { Suspense } from 'react'

import { MovieList } from '@/entities/ui'

export function MainList() {
  return (
    <div>
      <Suspense>
        <MovieList />
      </Suspense>
    </div>
  )
}
