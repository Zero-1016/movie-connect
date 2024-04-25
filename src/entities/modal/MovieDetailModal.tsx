"use client"

import { Rating } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { MovieDetailLinkButton } from "@/entities/ui";
import { QueryKey } from "@/shared/api/constants/query-key";
import { getImageUrl, getMovieDetail } from "@/shared/api/lib";
import { Chip } from "@/shared/ui";

import styles from './movie-detail-modal.module.scss'

type Props = {
    movieId: string
}

export function MovieDetailModal({ movieId }: Props) {
    const router = useRouter()

    const { data: result } = useSuspenseQuery({
        queryKey: QueryKey.movieDetail(movieId),
        queryFn: () => getMovieDetail(movieId)
    })

    const { poster_path, title, overview, genres, release_date, vote_average } = result

    const onClick = () => {
        router.replace(`/detail/${movieId}`)
    }

    return <div className={styles.container}>
        <div className={styles.leftSection}>
            <Image placeholder={'blur'} blurDataURL={getImageUrl(poster_path, 100)} src={getImageUrl(poster_path, 300)}
                   width={220} height={330}
                   alt={title + "포스터 사진"}/>
        </div>
        <div className={styles.rightSection}>
            <div className={styles.inner}>
                <h2 className={styles.movieTitle}>{title}</h2>
                <desc className={styles.description}>{overview}</desc>
                <div className={styles.chipBox}>
                    {genres.map(genre => <Chip key={genre.id}>{genre.name}</Chip>)}
                </div>
                <div>
                    개봉날짜 : {release_date}
                </div>
            </div>
            <div className={styles.inner}>
                <div className={styles.ratingBox}>
                    <Rating value={Math.ceil(vote_average / 2)} readOnly/>
                    <span>
                평균 평점 : {Math.floor(vote_average * 10) / 10}
                </span>
                </div>
                <MovieDetailLinkButton onClick={onClick} badge={true} size={"small"}>GET Detail
                    info</MovieDetailLinkButton>
            </div>
        </div>
    </div>
}
