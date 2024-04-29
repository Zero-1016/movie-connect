"use client"

import { ChangeEventHandler, FormEventHandler, useState } from "react";

import styles from './search-header.module.scss'

type Props = {
    keyword: string
}

export function SearchHeader({ keyword }: Props) {
    const [searchKeyword, setSearchKeyword] = useState(() => keyword)

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchKeyword(e.target.value)
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
    }

    return <section className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
            <label className={styles.label}>
                <input className={styles.input} onChange={onChange} type={"search"} value={searchKeyword}/>
            </label>
            <button className={styles.submitButton} type={"submit"}>검색</button>
        </form>
    </section>
}
