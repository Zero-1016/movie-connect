import { Skeleton } from "@mui/material";

import { MovieListSkeleton } from "@/entities/ui/MovieListSkeleton";

import styles from './movie-container.module.scss'

export function MovieContainerFallback() {

    return (
        <div className={styles.containerSkeleton}>
            <div className={styles.listHeaderSkeleton}>
                <div className={styles.listHeaderFlex}>
                    <h2 className={styles.movieTitleSkeleton}>
                        <Skeleton variant='rounded' sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                    </h2>
                    <h3 className={styles.movieSubTitleSkeleton}>
                        <Skeleton variant='rounded' sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                    </h3>
                </div>
                <div className={styles.linkSkeleton}>
                    <Skeleton variant='rounded' sx={{ height: '100%', backgroundColor: 'rgba(255,255,255, 30%)' }}/>
                </div>
            </div>
            <MovieListSkeleton/>
        </div>
    )
}
