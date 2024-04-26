"use client"
import { useSuspenseQuery } from "@tanstack/react-query";
import { StarIcon } from "lucide-react";
import Image from "next/image";

import { IMAGE_SIZE, QUERY_KEY } from "@/shared/api/constants";
import { getImageUrl, getMovieDetail } from "@/shared/api/lib";
import { getHour } from "@/shared/lib/util/getHours";
import { Chip } from "@/shared/ui";

import styles from './detail-middle-section.module.scss'

type Props = {
    movieId: string
}

export function DetailMiddleSection({ movieId }: Props) {

    const { data: result } = useSuspenseQuery({
        queryKey: QUERY_KEY.movieDetail(movieId),
        queryFn: () => getMovieDetail(movieId)
    })

    const { poster_path, title, tagline, overview, runtime, release_date, genres, vote_average } = result

    return <section className={styles.container}>
        <div className={styles.leftSection}>
            <Image className={styles.posterImage} src={getImageUrl(poster_path, IMAGE_SIZE.poster.w500)}
                   alt={title + "포스터 이미지"} width={480} height={720}/>
        </div>
        <div className={styles.rightSection}>
            <h3 className={styles.tagLine}>{tagline}</h3>
            <desc className={styles.description}>{overview}</desc>
            <div className={styles.averageBox}>
                <Chip>
                    <StarIcon fill='#ffffff'/> {Math.floor(vote_average * 10) / 10}
                </Chip>
            </div>
            <h5>상영 날짜</h5>
            <h6>{release_date}</h6>
            <h5>재생 시간</h5>
            <h6>{getHour(runtime)}</h6>
            <h5>장르</h5>
            <h6>{genres.map(genre => genre.name).join(', ')}</h6>
        </div>
    </section>
}
