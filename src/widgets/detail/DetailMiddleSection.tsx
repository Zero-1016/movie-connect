"use client"
import { useSuspenseQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { StarIcon } from "lucide-react";
import Image from "next/image";

import { IMAGE_SIZE, QUERY_KEY } from "@/shared/api/constants";
import { getImageUrl, getMovieDetail } from "@/shared/api/lib";
import { getDecimal, getHour } from "@/shared/lib/util";
import { poppins } from "@/shared/style";
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
        <div className={classNames(styles.rightSection, poppins.className)}>
            <h3 className={styles.tagLine}>{tagline ? tagline : title}</h3>
            <span className={styles.description}>{overview}</span>
            <div className={styles.averageBox}>
                <Chip className={styles.chip}>
                    <StarIcon size={20} stroke="#FFAD49"/> {getDecimal(vote_average)}
                </Chip>
            </div>
            <h6 className={styles.descriptionTitle}>상영 날짜</h6>
            <h5 className={styles.descriptionContent}>{release_date}</h5>
            <h6 className={styles.descriptionTitle}>재생 시간</h6>
            <h5 className={styles.descriptionContent}>{getHour(runtime)}</h5>
            <h6 className={styles.descriptionTitle}>장르</h6>
            <h5 className={styles.descriptionContent}>{genres.map(genre => genre.name).join(', ')}</h5>
        </div>
    </section>
}