import { LandingLeftSection } from '@/features/Landing'

import styles from './landing-contents.module.scss'

export function LandingContents() {
  return (
    <section className={styles.container}>
      <LandingLeftSection />
      {/*<LandingRightSection />*/}
    </section>
  )
}
