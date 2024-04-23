import { GENRES } from '../constants'

/*
리뷰의 아이디를 받아 한국어로 번역하여 내보냅니다.
 */
export function getMovieGenre(genreId: number) {
  return GENRES.find(value => value.id === genreId)?.title
}
