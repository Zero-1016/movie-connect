import { MovieInfo } from '@/entities/model/movie-info'

export type ResponseData = {
  page: number
  results: MovieInfo[]
  total_pages: number
  total_results: number
}
