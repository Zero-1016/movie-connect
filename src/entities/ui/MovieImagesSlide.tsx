"use client"

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

import { IMAGE_SIZE, QUERY_KEY } from "@/shared/api/constants";
import { getImages, getImageUrl } from "@/shared/api/lib";
import { useDragHandler } from "@/shared/hook/useDragHandler";

import styles from './movie-images-slide.module.scss'

type Props = {
    movieId: string
}

export function MovieImagesSlide({ movieId }: Props) {

    const { data: ImageList } = useSuspenseQuery({
        queryKey: QUERY_KEY.movieImages(movieId),
        queryFn: () => getImages(movieId)
    })

    const { ref, onMouseDown } = useDragHandler()

    const backDropList = ImageList.backdrops.slice(0, 20)

    return (
        <>
            {backDropList.length > 0 && <ul
                className={styles.container}
                onMouseDown={onMouseDown}
                ref={ref}
            >
                {backDropList.map(backDrop => <Link key={backDrop.file_path}
                                                    href={`/i/image/${movieId}/backdrop/${backDrop.file_path}`}
                                                    scroll={false}><Image
                    src={getImageUrl(backDrop.file_path, IMAGE_SIZE.backdrop.w300)}
                    alt={"배경 이미지 미리보기"} width={280} height={140}/></Link>)}
            </ul>}
        </>
    )
}
