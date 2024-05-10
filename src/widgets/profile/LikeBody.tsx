import { MovieCard } from "@/entities/ui";
import { ProfileTitle } from "@/features/profile";
import { generateMovie } from "@/shared/mock/construct";

import styles from './like-body.module.scss';

type Props = {
    page: string
}

const { results } = generateMovie(10)
export function LikeBody({}: Readonly<Props>) {
    return <section>
        <ProfileTitle/>
        <ul className={styles.movieContainer}>
            {results.map(item => <MovieCard size="small" key={item.id} movieData={item}/>)}
        </ul>
    </section>
}
