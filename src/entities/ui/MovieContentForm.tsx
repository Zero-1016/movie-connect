"use client"

import { TextareaAutosize } from "@mui/material";
import classNames from "classnames";
import { ChangeEventHandler, useState } from "react";

import { MovieContentList } from "@/entities/ui/MovieContentList";
import { generateContents } from "@/shared/mock/construct";
import { notoSans } from "@/shared/style";

import styles from './movie-content-form.module.scss'

type Props = {
    movieId: string
}

export function MovieContentForm({}: Readonly<Props>) {
    const [content, setContent] = useState("")
    const comments = generateContents(4)

    const onSubmit = () => {

    }

    const onChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setContent(e.target.value)
    }

    return (
        <section className={styles.container}>
            <h3 className={styles.subTitle}>리뷰 모아보기</h3>
            {comments.length > 0 && <MovieContentList contentList={comments}/>}
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
