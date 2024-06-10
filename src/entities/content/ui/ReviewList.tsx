import { useSuspenseQuery } from '@tanstack/react-query'

import styles from '@/entities/content/ui/detail-movie-content-container.module.scss'
import { getMovieReviewList } from '@/entities/local_movie/api'
import { ContentResponse } from '@/entities/movie/model'
import { LOCAL_QUERY_KEY } from '@/shared/constants'
import { usePagination } from '@/shared/hook'
import { Pagination } from '@/shared/ui/Pagination'
import { OneMovieContent } from '@/widgets/content'

type Props = {
  movieId: number | string
}

export function ReviewList({ movieId }: Props) {
  const { curPage, setCurPage } = usePagination(1)
  const { data, refetch } = useSuspenseQuery<ContentResponse>({
    queryKey: LOCAL_QUERY_KEY.movieReview(movieId),
    queryFn: () => getMovieReviewList(movieId, curPage),
  })

  const { results, total_results, total_pages } = data

  const onMovePage = async (page: number) => {
    setCurPage(page)
    await refetch()
  }

  return (
    <>
      <ul className={styles.commentContainer}>
        {results.map(content => (
          <OneMovieContent key={content.id} content={content} />
        ))}
      </ul>
      <Pagination curPage={curPage} callback={onMovePage} total_pages={total_pages} total_results={total_results} />
    </>
  )
}
