import { MoviesResponse } from '@/shared/api/model'
import { movieListMock } from '@/shared/mock/data'

export function generateMovie(numArrays: number): MoviesResponse {
  const mockData: MoviesResponse = {
    results: Array(numArrays)
      .fill('')
      .map(() => {
        return movieListMock.results[Math.floor(Math.random() * movieListMock.results.length)]
      }),
    page: 1,
    total_pages: 10,
    total_results: 190,
  }

  return mockData
}
