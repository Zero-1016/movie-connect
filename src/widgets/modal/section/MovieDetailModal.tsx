'use client'

import { Suspense } from 'react'

import { Modal } from '@/shared/ui/Modal'
import { MovieDetailContentSkeleton } from '@/widgets/modal/skeleton/MovieDetailContentSkeleton'
import { MovieDetailContent } from '@/widgets/modal/ui/MovieDetailContent'

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
