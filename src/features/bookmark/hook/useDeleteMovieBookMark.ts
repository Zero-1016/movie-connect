import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteMovieBookMark } from '@/features/bookmark/lib'
import { LOCAL_QUERY_KEY } from '@/shared/constants'

export function UseDeleteMovieBookMark() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (movieId: string) => deleteMovieBookMark(movieId),
    onMutate: movieId => {
      queryClient.setQueryData(LOCAL_QUERY_KEY.movieBookMark(movieId), (prevData: { isLike: boolean }) => {
        return { isLike: !prevData.isLike }
      })
      return movieId
    },
    onError: async (_, movieId) => {
      await queryClient.invalidateQueries({
        queryKey: LOCAL_QUERY_KEY.movieBookMark(movieId),
      })
    },
  })
}
