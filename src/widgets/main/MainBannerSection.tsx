import { Suspense } from 'react'

import { MovieBanner } from '@/entities/ui'
import RQProvider from '@/shared/lib/react-query/RQProvider'

import styles from './movie-banner-section.module.scss'

export function MainBannerSection() {
  return (
    <RQProvider>
      <section className={styles.movieContainer}>
        <Suspense fallback={<div className={styles.movieBannerFallback} />}>
          <MovieBanner />
        </Suspense>
      </section>
    </RQProvider>
  )
}
