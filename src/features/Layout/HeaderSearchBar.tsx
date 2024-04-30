"use client"

import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { quando } from "@/shared/style/quando";

import deleteSvg from '../../../public/svg/close.svg'
import searchSvg from '../../../public/svg/serach.svg'
import styles from './header-search-bar.module.scss'

export function HeaderSearchBar() {
    const [isFocus, setIsFocus] = useState(false)
    const router = useRouter()

    const onSubmit = (e: FormData) => {
        const keyword = e.get("keyword")

        if (typeof keyword !== "string") return

        router.push('/search?keyword=' + keyword)
    }

    const resetValue = () => {
        const input = document.getElementById("keyword") as HTMLInputElement
        input.value = "";
    }

    const onFocus = () => {
        setIsFocus(true)
    }

    const onBlur = () => {
        setIsFocus(false)
    }

    return <form action={onSubmit} className={classNames(styles.container, isFocus && styles.hover)}>
        <label htmlFor="keyword" className={styles.label}>
            <div className={styles.inputBox}>
                <Image className={styles.icon} src={searchSvg} alt="검색 아이콘"/>
                <input onFocus={onFocus} onBlur={onBlur} placeholder="관심있는 영화제목을 입력하세요" id="keyword" name="keyword"
                       className={classNames(styles.search, quando.className)}
                       type={"search"}/>
            </div>
            <Image onClick={resetValue} src={deleteSvg} alt="일괄 지우기 아이콘"/>
        </label>
    </form>
}
