'use client'

import { PropsWithChildren } from 'react'

import { UsePostMovieBookMark } from '@/features/bookmark/hook'

type Props = {
  movieId: string
}

export function PostMovieLikeContainer({ movieId, children }: PropsWithChildren<Props>) {
  const { mutateAsync } = UsePostMovieBookMark(movieId)

  const onClick = async () => {
    await mutateAsync()
  }
  return <div onClick={onClick}>{children}</div>
}
