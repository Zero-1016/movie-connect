"use client"

import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";

import { quando } from "@/shared/quando";

import styles from './header-search-bar.module.scss'

export function HeaderSearchBar() {
    const router = useRouter()
    const path = usePathname()

    if (path === "/search") return  null

    const onSubmit = (e: FormData) => {
        const keyword = e.get("keyword")

        if (typeof keyword !== "string") return

        router.push('/search?keyword=' + keyword)
    }

    return <form action={onSubmit} className={styles.container}>
        <label htmlFor="keyword">
            <input placeholder="관심있는 영화제목을 입력하세요" name="keyword" className={classNames(styles.search, quando.className)} type={"search"}/>
        </label>
    </form>
}
