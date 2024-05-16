import { LandingLeftSection } from '@/widgets/landing/section/LandingLeftSection'

import styles from './landing-contents.module.scss'

export function LandingContents() {
  return (
    <section className={styles.container}>
      <LandingLeftSection />
      {/*<LandingRightSection />*/}
    </section>
  )
}
