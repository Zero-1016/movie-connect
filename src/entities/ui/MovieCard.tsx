'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import { useState } from "react";

import { getImageUrl } from '@/shared/api/lib/getImageUrl'

import { MovieInfo } from '../../shared/api/model'
import styles from './movie-card.module.scss'

type Props = {
    movieData: MovieInfo
}

export function MovieCard({ movieData }: Props) {
    const { title, backdrop_path, poster_path } = movieData

    const [isLoad, setIsLoad] = useState(false)

    const onLoad = () => {
        setIsLoad(true)
    }
    return (
        <motion.div whileHover={{y:-20}} className={styles.container}>
            <Image sizes="width=280 height=420" className={styles.poster} onLoad={onLoad} src={getImageUrl(poster_path)} alt={title + '의 이미지'}
                   fill={true}/>
        </motion.div>
    )
}
