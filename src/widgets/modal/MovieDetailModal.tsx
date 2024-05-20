'use client'

import { Suspense } from 'react'

import { MovieDetailContent } from '@/entities/movie/ui'
import { Modal } from '@/shared/ui/Modal'
import { MovieDetailContentSkeleton } from '@/widgets/modal'

type Props = {
  movieId: string
}

export function MovieDetailModal({ movieId }: Props) {
  return (
    <Modal isClose>
      <Modal.Content>
        <Suspense fallback={<MovieDetailContentSkeleton />}>
          <MovieDetailContent movieId={movieId} />
        </Suspense>
      </Modal.Content>
    </Modal>
  )
}
