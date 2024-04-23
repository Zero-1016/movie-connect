"use client"

import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

import { YoutubePlayer } from "@/entities/ui/YoutubePlayer";
import { ResponseData } from "@/shared/api/model";

import { getNowPlay, getVideos } from "../../shared/api/lib";
import styles from './movie-banner.module.scss'

export function MovieBanner() {
    const [movieIndex, setMovieIndex] = useState(0)
    const { data: playListData } = useSuspenseQuery<ResponseData>({
        queryKey: ['movies', 'nowPlaying', 1],
        queryFn: () => getNowPlay(1)
    })

    const movieList = useSuspenseQueries({
        queries: playListData.results.map(item => item.id).map(id => ({
            embed: !playListData,
            queryFn: () => getVideos(id),
            queryKey: ["movies", "video", id],
        }))
    })


    const keyList = movieList.map(item => item.data.results.filter(v => {
        if (v.type === "Teaser") {
            return v.id
        }
    })).filter(links => links.length !== 0).map(items => items.slice(0, 1)[0].key)


    const endMovie = () => {
        setMovieIndex(prev => prev + 1 > keyList.length ? 0 : prev + 1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.blackCover}/>
            <div className={styles.movieCover}/>
            <YoutubePlayer endMovie={endMovie} videoId={keyList[movieIndex]}/>
        </div>
    )
}
