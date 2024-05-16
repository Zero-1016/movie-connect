import { Suspense } from 'react'

import { RQProvider } from '@/shared/ui'
import { MainMovieBanner } from '@/widgets/main/ui'

import styles from './main-top-section.module.scss'

export function MainTopSection() {
  return (
    <section className={styles.movieContainer}>
      <RQProvider>
        <Suspense fallback={<div className={styles.movieBannerFallback} />}>
          <MainMovieBanner />
        </Suspense>
      </RQProvider>
    </section>
  )
}
