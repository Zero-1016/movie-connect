export const QUERY_KEY = {
    nowPlay: (page: number) => ['movies', 'now-play', page] as [string, string, number],
    upComing: (page: number) => ['movies', 'up-coming', page] as [string, string, number],
    popular: (page: number) => ['movies', 'popular', page] as [string, string, number],
    topRated: (page: number) => ['movies', 'topRated', page] as [string, string, number],
    movieDetail: (movieId: string) => ['movie', 'detail', movieId] as [string, string, string]
}
