import { MovieCard } from "@/entities/ui";
import { ProfileTitle } from "@/features/profile";
import { generateMovie } from "@/shared/mock/construct";

import styles from './like-body.module.scss';

type Props = {
    page?: number
}

export function LikeBody({ page = 1 }: Readonly<Props>) {
    const { results } = generateMovie(page + 9)
    return <section>
        <ProfileTitle/>
        <ul className={styles.movieContainer}>
            {results.map(item => <MovieCard size="small" key={item.id} movieData={item}/>)}
        </ul>
    </section>
}
