import { MovieInfo } from '@/shared/api/model/movie-info'

export type ResponseData = {
  page: number // 현재 페이지 수
  results: MovieInfo[] // 조회한 결과 리스트
  total_pages: number // 전체 페이지 수
  total_results: number // 전체 리스트 갯수
}
