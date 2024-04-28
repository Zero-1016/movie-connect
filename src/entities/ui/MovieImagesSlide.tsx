"use client"

import { Avatar } from "@mui/material";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

import { IMAGE_SIZE, QUERY_KEY } from "@/shared/api/constants";
import { getImages, getImageUrl } from "@/shared/api/lib";
import { generateMockComments } from "@/shared/api/model/comment";
import { useDragHandler } from "@/shared/hook/useDragHandler";
import { timeAgo } from "@/shared/lib/util";

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
    const comments = generateMockComments(4)

    return (
        <section className={styles.container}>
            <h3 className={styles.subTitle}>장면 미리보기</h3>
            {backDropList.length > 0 && <ul
                className={styles.backDropList}
                onMouseDown={onMouseDown}
                ref={ref}
            >
                {backDropList.map(backDrop => <Link key={backDrop.file_path}
                                                    href={`/i/image/${movieId}/backdrop/${backDrop.file_path}`}
                                                    scroll={false}><Image
                    src={getImageUrl(backDrop.file_path, IMAGE_SIZE.backdrop.w300)}
                    alt={"배경 이미지 미리보기"} width={280} height={140}/></Link>)}
            </ul>}
            <h3 className={styles.subTitle}>리뷰 모아보기</h3>
            {comments.length > 0 && <ul className={styles.commentContainer}>
                {comments.map(comment => <li className={styles.comment} key={comment.id}>
                    <div className={styles.commentHeader}>
                        <div className={styles.commentAvatar}>
                            <Avatar src={comment.img_url}
                                    alt={comment.username}/> {comment.username}
                        </div>
                        <div>{timeAgo(comment.create_at)}</div>
                    </div>
                    <div>{comment.comment}</div>
                </li>)}
            </ul>}
        </section>
    )
}