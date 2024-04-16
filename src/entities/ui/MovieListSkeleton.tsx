import { Skeleton } from "@mui/material";

import styles from "@/entities/ui/movie-list.module.scss";

export function MovieListSkeleton() {

    return (
        <ul
            className={styles.container}>
            {Array.from({ length: 5 }).map((v, i) => (
                <li className={styles.card} key={i}>
                    <Skeleton variant='rounded' sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                </li>
            ))}
        </ul>
    );
}
