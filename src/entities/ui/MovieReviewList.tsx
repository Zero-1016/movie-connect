"use client"

import { Avatar, TextareaAutosize } from "@mui/material";
import classNames from "classnames";
import { ChangeEventHandler, useState } from "react";

import { timeAgo } from "@/shared/lib/util";
import { generateComments } from "@/shared/mock/construct";
import { notoSans } from "@/shared/style";

import styles from './movie-comment-list.module.scss'

type Props = {
    movieId: string
}

export function MovieReviewList({ }: Readonly<Props>) {
    const [content, setContent] = useState("")
    const comments = generateComments(4)

    const onSubmit = () => {

    }

    const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setContent(e.target.value)
    }

    return (
        <section className={styles.container}>
            <h3 className={styles.subTitle}>리뷰 모아보기</h3>
            {comments.length > 0 && <ul className={styles.commentContainer}>
                {comments.map(comment => <li className={styles.comment} key={comment.id}>
                    <div className={styles.commentHeader}>
                        <div className={styles.commentAvatar}>
                            <Avatar src={comment.writer.profileUrl ? comment.writer.profileUrl : undefined}
                                    alt={comment.writer.nickname}/> {comment.writer.nickname}
                        </div>
                        <div>{timeAgo(new Date(comment.createAt))}</div>
                    </div>
                    <div>{comment.content}</div>
                </li>)}
            </ul>}
            <form className={classNames(styles.formContainer, notoSans.className)} onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }}>
                <label className={styles.label}>
                    <TextareaAutosize className={styles.textArea} value={content} onChange={onChangeContent}
                                      placeholder="나의 리뷰 작성하기"/>
                </label>
                <div className={styles.submitButton}>
                    {content.length}/200
                    <button type="submit" disabled={!content?.trim()}>
                        등록
                    </button>
                </div>
            </form>
        </section>
    )
}
