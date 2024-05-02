"use client"

import { MovieListSkeleton } from "@/entities/ui/MovieListSkeleton";
import { useBlockScroll } from "@/shared/hook/use-block-scroll";

import styles from './movie-infinity-skeleton-list.module.scss'

export function MovieInfinitySkeletonList(){
    useBlockScroll()

    return <>
        <div className={styles.list}>
            <MovieListSkeleton />
        </div>
        <div className={styles.list}>
            <MovieListSkeleton />
        </div>
        <div className={styles.list}>
            <MovieListSkeleton />
        </div>
        <div className={styles.list}>
            <MovieListSkeleton />
        </div>
    </>
}
