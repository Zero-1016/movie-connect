import { MovieInfo } from '@/entities/model'
import { MovieCard } from '@/entities/ui/MovieCard'
import { useDragHandler } from "@/shared/hook/useDragHandler";

import styles from './movie-list.module.scss'

type Props = {
    movieList: MovieInfo[]
}

export function MovieList({ movieList }: Props) {

    const { ref, onMouseDown } = useDragHandler()

    return (
        <ul
            onMouseDown={onMouseDown}
            ref={ref}
            className={styles.container}
        >
            {movieList.map(movieData => (
                <li className={styles.card} key={movieData.id}>
                    <MovieCard movieData={movieData}/>
                </li>
            ))}
        </ul>
    );
}
