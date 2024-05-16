type QueryKey = 'search' | 'nowPlay' | 'upComing' | 'popular' | 'topRated' | 'detail' | 'images' | 'video'

// eslint-disable-next-line unused-imports/no-unused-vars
type QueryFunction = (key: string) => string[]

export const QUERY_KEY: Record<QueryKey, QueryFunction> = {
  search: key => ['movies', 'search', key],
  nowPlay: key => ['movies', 'now-play', key],
  upComing: key => ['movies', 'up-coming', key],
  popular: key => ['movies', 'popular', key],
  topRated: key => ['movies', 'top-rated', key],
  detail: key => ['movie', 'detail', key],
  images: key => ['movie', 'images', key],
  video: key => ['movies', 'videos', key],
} as const
