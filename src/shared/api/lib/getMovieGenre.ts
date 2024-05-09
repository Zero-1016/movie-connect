import { GENRES } from '../constants'

export function getMovieGenre(genreId: keyof typeof GENRES) {
    return GENRES[genreId].title
}
