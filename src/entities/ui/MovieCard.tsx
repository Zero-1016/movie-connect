'use client'

import { motion } from "framer-motion"
import Image from 'next/image'

import { getMovieGenre } from "@/shared/api/lib";
import { getImageUrl } from '@/shared/api/lib/getImageUrl'
import { Chip } from "@/shared/ui";

import { MovieInfo } from '../../shared/api/model'
import styles from './movie-card.module.scss'

type Props = {
    movieData: MovieInfo
}

export function MovieCard({ movieData }: Props) {
    const { title, release_date, poster_path, adult, genre_ids } = movieData

    return (
        <motion.div whileHover={{ y: -10, scale: 1.05 }} className={styles.container}>
            <Image sizes="width=280 height=420" className={styles.poster} src={getImageUrl(poster_path)}
                   alt={title + '의 이미지'}
                   fill={true}/>
            <div className={styles.movieInfoBackGround}>
                <div className={styles.movieInfo}>
                    <h4 className={styles.movieTitle}>
                        {title}
                    </h4>
                    <h5>
                        {release_date}
                    </h5>
                    {adult && <span>18+</span>}
                    <div className={styles.genreContainer}>
                        {genre_ids.map(genre => <Chip key={genre}>{getMovieGenre(genre)}</Chip>)}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
