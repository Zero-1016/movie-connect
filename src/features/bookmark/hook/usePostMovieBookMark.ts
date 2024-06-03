import { useMutation, useQueryClient } from '@tanstack/react-query'

import { postMovieBookMark } from '@/features/bookmark/lib'
import { LOCAL_QUERY_KEY } from '@/shared/constants'

export function UsePostMovieBookMark(movieId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => postMovieBookMark(movieId),
    onMutate: () => {
      queryClient.setQueryData(LOCAL_QUERY_KEY.movieBookMark(movieId), (prevData: { isLike: boolean }) => {
        return { isLike: !prevData.isLike }
      })
    },
    onError: () => {
      queryClient.invalidateQueries({
        queryKey: LOCAL_QUERY_KEY.movieBookMark(movieId),
      })
    },
  })
}
