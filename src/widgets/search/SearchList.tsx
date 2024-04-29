import { MovieSearchCard } from "@/entities/ui/MovieSearchCard";
import { movieListMock } from "@/shared/mock/movie-list.mock";

import styles from './search-list.module.scss'

type Props = {
    keyword: string
}

export function SearchList({ keyword }: Props) {
    const searchResult = movieListMock.results
    return <section className={styles.container}>{
        searchResult.map(movieData => <MovieSearchCard key={movieData.id} movieData={movieData}/>)
    }</section>
}
