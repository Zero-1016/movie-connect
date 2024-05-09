"use client"

import { Suspense, useMemo } from "react";

import { MovieInfinityList } from "@/entities/ui";
import { getPopular, getTopRated, getUpComing } from "@/shared/api/lib";
import { MovieType } from "@/shared/api/model/movie-info";
import { MovieInfinitySkeletonList } from "@/widgets/movie-list/MovieInfinitySkeletonList";

import styles from './infinity-list-body.module.scss'

type Props = {
    type: MovieType
}

export function InfinityListBody({ type }: Readonly<Props>) {
    const { qureyFn, queryKey } = useMemo(() => {
        switch (type) {
            case "popular":
                return { queryKey: ['movies', 'infinity-popular'], qureyFn: getPopular }
            case "upcoming":
                return { queryKey: ['movies', 'infinity-upcoming'], qureyFn: getUpComing }
            case "top-rated":
                return { queryKey: ['movies', 'infinity-top-rated'], qureyFn: getTopRated }
        }
    }, [type])

    return <div className={styles.container}>
        <Suspense fallback={
            <MovieInfinitySkeletonList/>}>
            <MovieInfinityList queryKey={queryKey} qureyFn={qureyFn}/>
        </Suspense>
    </div>
}
