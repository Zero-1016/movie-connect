export type MovieInfo = {
  adult: boolean // 성인 영화의 여부
  backdrop_path: string | null // 배경주소
  genre_ids: number[] // 해당 영화의 장르 종류
  id: number // 영화 아이디
  original_language: string // 만들어진 나라의 언어
  original_title: string // 만들어진 나라의 제목
  overview: string // 한 줄 소개
  popularity: number // 방문자 수
  poster_path: string | null // 포스터 주소
  release_date: string // 개봉 날짜
  title: string // 제목
  video: boolean // 비디오가 있는지의 여부
  vote_average: number // 평균 점수
  vote_count: number // 평균 점수를 평가한 사람들의 수
}

export type MovieType = "popular" | "upcoming" | "top-rated"
