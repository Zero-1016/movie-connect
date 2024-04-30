"use client"

import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { MovieCard } from "@/entities/ui/MovieCard";
import { ResponseData } from "@/shared/api/model";

import styles from './movie-infinity-list.module.scss';

type Props = {
    queryKey: [string]
    qureyFn: (page: number) => Promise<ResponseData>
}

export function MovieInfinityList({ qureyFn, queryKey }: Props) {
    const { ref, inView } = useInView({ delay: 1000 })
    const { data, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery({
        queryKey: queryKey,
        queryFn: ({ pageParam }) => qureyFn(pageParam),
        getNextPageParam(lastPage, allPages, lastPageParam, allPageParams) {
            return allPageParams.length + 1;
        },
        initialPageParam: 1
    })

    useEffect(() => {
        if (inView && hasNextPage) fetchNextPage();
    }, [inView]);

    const result = data.pages.flatMap(item => item.results)

    return <>
        <ul className={styles.container}>{result.map((value, index) => <li
            ref={result.length - 8 === index ? ref : null} key={value.id}><MovieCard movieData={value}/>
        </li>)}</ul>
    </>
}
