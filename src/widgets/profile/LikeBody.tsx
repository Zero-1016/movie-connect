import { MovieCard } from "@/entities/ui";
import { ProfileTitle } from "@/features/profile";
import { MoviesResponse } from "@/shared/api/model";

import styles from './like-body.module.scss';

type Props = {
    movieList: MoviesResponse
}

export function LikeBody({ movieList }: Readonly<Props>) {
    const { results } = movieList
    return <div>
        <ProfileTitle/>
        <ul className={styles.movieContainer}>
            {results.map(item => <MovieCard size="small" key={item.id} movieData={item}/>)}
        </ul>
    </div>
}
