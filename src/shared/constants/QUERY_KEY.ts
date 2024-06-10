type QUERY_KEY = 'search' | 'nowPlay' | 'upComing' | 'popular' | 'topRated' | 'detail' | 'images' | 'video'

// eslint-disable-next-line unused-imports/no-unused-vars
type QueryFunction = <T>(key: T) => [string, string, T]

export const MOVIE_QUERY_KEY: Record<QUERY_KEY, QueryFunction> = {
  search: key => ['movies', 'search', key],
  nowPlay: key => ['movies', 'now-play', key],
  upComing: key => ['movies', 'up-coming', key],
  popular: key => ['movies', 'popular', key],
  topRated: key => ['movies', 'top-rated', key],
  detail: key => ['movie', 'detail', key],
  images: key => ['movie', 'images', key],
  video: key => ['movies', 'videos', key],
} as const

type LOCAL_QUERY_KEY = 'movieBookMark' | 'movieReview' | 'movieFamousLine' | 'myReview' | 'myFamousLine' | 'myLikeMovie'

// eslint-disable-next-line unused-imports/no-unused-vars
type LocalQueryFunction = <T>(key: T) => [string, string, T]

export const LOCAL_QUERY_KEY: Record<LOCAL_QUERY_KEY, LocalQueryFunction> = {
  movieBookMark: key => ['movie', 'bookmark', key],
  movieFamousLine: key => ['movie', 'famousLine', key],
  movieReview: key => ['movie', 'review', key],
  myLikeMovie: key => ['my', 'likeMovie', key],
  myFamousLine: key => ['my', 'famousLine', key],
  myReview: key => ['my', 'review', key],
} as const
