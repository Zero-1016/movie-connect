'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import { useRouter } from "next/navigation";

import { getMovieGenre } from "@/shared/api/lib";
import { getImageUrl } from '@/shared/api/lib/getImageUrl'
import { Chip } from "@/shared/ui";

import { MovieInfo } from '../../shared/api/model'
import styles from './movie-card.module.scss'

type Props = {
    movieData: MovieInfo
}

export function MovieCard({ movieData }: Props) {
    const { title, release_date, poster_path, adult, genre_ids, id } = movieData

    const router = useRouter()
    const onClick = () => {
        router.push(`/i/info/${id}`, { scroll: false })
    }

    const blockOnClick = (e:React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <motion.div whileHover={{ y: -10, scale: 1.05 }} className={styles.container}>
            <Image sizes="width=280 height=420" className={styles.poster} src={getImageUrl(poster_path)}
                   alt={title + '의 이미지'}
                   fill={true}/>
            <div onClick={onClick} className={styles.movieInfoBackGround}>
                <div onClick={blockOnClick} className={styles.movieInfo}>
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
