"use client"

import { useSuspenseQuery } from "@tanstack/react-query";
import classNames from "classnames";
import { motion } from "framer-motion"
import Image from "next/image";

import { IMAGE_SIZE } from "@/shared/api/constants";
import { QUERY_KEY } from "@/shared/api/constants/query-key";
import { getImageUrl, getMovieDetail } from "@/shared/api/lib";
import { quando } from "@/shared/style/quando";

import styles from './detail-top-section.module.scss'

type Props = {
    movieId: string
}

export function DetailTopSection({ movieId }: Props) {

    const { data: result } = useSuspenseQuery({
        queryKey: QUERY_KEY.movieDetail(movieId),
        queryFn: () => getMovieDetail(movieId)
    })

    const { belongs_to_collection, backdrop_path, title, original_title } = result


    return <section className={styles.container}>
        <div className={styles.imageContainer}>
            <div className={styles.blueBlur}/>
            <Image src={getImageUrl(backdrop_path, IMAGE_SIZE.backdrop.w1280)} alt={title + "포스터"} fill={true}
                   style={{ objectFit: "cover" }}/>
        </div>
        <motion.div initial={{ y: 50 }} animate={{ y: 0, transition: { duration: 0.5 }, type: 'easeOut' }} className={styles.blurBox}>
        {belongs_to_collection ? <h3 className={styles.movieSubTitle}>{belongs_to_collection.name} <span
            style={{ color: 'white' }}>/</span> {original_title}
        </h3>
        : <h3 className={styles.movieSubTitle}>{original_title}</h3>}
        <h1 className={classNames(styles.movieTitle, quando.className)}>{title}</h1>
    </motion.div>
</section>
}
