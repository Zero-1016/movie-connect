'use client'

import { PropsWithChildren } from 'react'

import { UseDeleteMovieBookMark } from '@/features/bookmark/hook'

type Props = {
  movieId: string
}

export function DeleteMovieDisLikeContainer({ movieId, children }: PropsWithChildren<Props>) {
  const { mutateAsync } = UseDeleteMovieBookMark()

  const onClick = async () => {
    await mutateAsync(movieId)
  }

  return <div onClick={onClick}>{children}</div>
}
