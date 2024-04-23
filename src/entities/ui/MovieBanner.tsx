"use client"

import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { YoutubePlayer } from "@/entities/ui/YoutubePlayer";
import { ResponseData } from "@/shared/api/model/response-data";
import { Videos } from "@/shared/api/model/video-info";

import { getNowPlay, getVideos } from "../../shared/api/lib";
import styles from './movie-banner.module.scss'

export function MovieBanner() {
    const [movieIndex, setMovieIndex] = useState(0)
    const [videos, setVideos] = useState<null | Videos>(null)
    const [videoId, setVideoId] = useState<null | string>(null)
    const { data } = useSuspenseQuery<ResponseData>({
        queryKey: ['movies', 'nowPlaying', 1],
        queryFn: () => getNowPlay(1)
    })

    useEffect(() => {
        getVideos(data.results[movieIndex].id).then(res => {
            setVideos(res)
        })
    }, [movieIndex])

    useEffect(() => {
        if (!videos) return
        setVideoId(videos.results[0].key)
    }, [videos])

    const endMovie = () => {
        setMovieIndex(prev => {
            if (prev + 1 === videos?.results.length) {
                return 0
            } else {
                return prev + 1
            }
        })
    }

    if (!videos || !videoId) return

    if (videos.results.length === 0 || videos.results[0].key === undefined) {
        endMovie()
    }

    return (<div className={styles.container}>
        <div className={styles.movieCover}/>
        <YoutubePlayer endMovie={endMovie} videoId={videoId}/>
    </div>)
}
