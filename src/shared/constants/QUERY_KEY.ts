type QUERY_KEY = 'search' | 'nowPlay' | 'upComing' | 'popular' | 'topRated' | 'detail' | 'images' | 'video'

// eslint-disable-next-line unused-imports/no-unused-vars
type QueryFunction = (key: string) => [string, string, string]

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

type LOCAL_QUERY_KEY = 'movieBookMark'

// eslint-disable-next-line unused-imports/no-unused-vars
type LocalQueryFunction = (key: string) => [string, string, string]

export const LOCAL_QUERY_KEY: Record<LOCAL_QUERY_KEY, LocalQueryFunction> = {
  movieBookMark: key => ['movie', 'bookmark', key],
} as const
