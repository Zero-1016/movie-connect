import { GENRES } from '@/shared/constants'

export function getMovieGenre(genreId: keyof typeof GENRES) {
  return GENRES[genreId].name
}
