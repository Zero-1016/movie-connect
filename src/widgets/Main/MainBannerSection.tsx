import { Suspense } from "react";

import { MovieBanner } from "@/entities/ui";

import styles from './movie-banner-section.module.scss'

export function MainBannerSection() {
    return <section className={styles.movieContainer}>
        <Suspense fallback={<div className={styles.movieBannerFallback}/>}>
            <MovieBanner/>
        </Suspense>
    </section>
}
