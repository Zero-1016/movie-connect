import { ReactNode } from "react";

import { Footer, Header } from "@/features/Layout";

import styles from './layout.module.scss'

type Props = {
    children: ReactNode,
    modal: ReactNode
}

export default function Layout({ children, modal }: Props) {
    return <main className={styles.container}>
        {modal}
        <Header/>
        {children}
        <Footer/>
    </main>
}
