import { Genre } from '@/entities/movie/model/genre'

export type Movie = {
  /** 성인 영화의 여부 */
  adult: boolean
  /** 배경주소 */
  backdrop_path: string | null
  /** 해당 영화의 장르 종류 */
  genre_ids: number[]
  /** 영화 아이디 */
  id: number
  /** 만들어진 나라의 언어 */
  original_language: string
  /** 만들어진 나라의 제목 */
  original_title: string
  /** 한 줄 소개 */
  overview: string
  /** 방문자 수 */
  popularity: number
  /** 포스터 주소 */
  poster_path: string | null
  /** 개봉 날짜 */
  release_date: string
  /** 제목 */
  title: string
  /** 비디오가 있는지의 여부 */
  video: boolean
  /** 평균 점수 */
  vote_average: number
  /** 평균 점수를 평가한 사람들의 수 */
  vote_count: number
}

export type MovieType = 'popular' | 'upcoming' | 'top-rated'

export interface MyLikeMovie {
  movieId: number
  poster_path: string
  backdrop_path: string
  genres: Genre[]
  release_date: string
  title: string
}
