"use client"

import { CircularProgress } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { MovieSearchCard } from "@/entities/ui/MovieSearchCard";
import { getMovieSearch } from "@/shared/api/lib";

import styles from './search-list.module.scss'

type Props = {
    keyword: string
}

export function SearchList({ keyword }: Props) {
    const { ref, inView } = useInView()
    const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery({
        queryKey: ["search", keyword],
        queryFn: ({ pageParam }) => getMovieSearch(keyword, pageParam),
        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
            if (lastPage.total_pages > lastPageParam)
                return lastPageParam + 1;

            return null
        },
        initialPageParam: 1
    })

    useEffect(() => {
        if (inView && !isFetching) {
            fetchNextPage()
        }
    }, [inView])

    const searchResult = data?.pages.flatMap(item => item.results)

    return (
        <section className={styles.container}>
            <ul className={styles.searchCardBox}>
                {searchResult?.map(movieData => <MovieSearchCard key={movieData.id} movieData={movieData}/>)}
            </ul>
            {hasNextPage && <div ref={ref} style={{
                height: "200px",
                display: "flex",
                justifyContent: "center",
                justifyItems: 'center',
                alignItems: 'center'
            }}>
                <CircularProgress/>
            </div>}
        </section>
    )
}
