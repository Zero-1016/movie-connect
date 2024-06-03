'use client'

import StarRoundedIcon from '@mui/icons-material/StarRounded'
import { IconButton } from '@mui/material'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

import { getMovieBookMark } from '@/entities/local_movie/api'
import { DeleteMovieDisLikeContainer, PostMovieLikeContainer } from '@/features/bookmark/ui'
import { LOCAL_QUERY_KEY } from '@/shared/constants'

type Props = {
  movieId: string
  size: 'small' | 'medium'
}

export function MovieBookMarkButton({ movieId, size }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: LOCAL_QUERY_KEY.movieBookMark(movieId),
    queryFn: getMovieBookMark,
  })

  const [width, height, right, top] = useMemo(() => {
    switch (size) {
      case 'medium':
        return [100, 100, 10, 10]
      case 'small':
        return [40, 40, 0, 20]
    }
  }, [size])

  return (
    <IconButton sx={{ position: 'absolute', zIndex: 10, right, top }}>
      {data?.isLike ? (
        <DeleteMovieDisLikeContainer movieId={movieId}>
          <StarRoundedIcon sx={{ color: '#ffff00', width, height }} />
        </DeleteMovieDisLikeContainer>
      ) : (
        <PostMovieLikeContainer movieId={movieId}>
          <StarRoundedIcon sx={{ color: '#5F6368', width, height }} />
        </PostMovieLikeContainer>
      )}
    </IconButton>
  )
}
