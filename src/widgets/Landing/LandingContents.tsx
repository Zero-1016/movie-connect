import { LandingLeftSection, LandingRightSection } from '@/features/Landing'

import * as style from './LandingContents.css'

export function LandingContents() {
  return (
    <section className={style.container}>
      <LandingLeftSection />
      <LandingRightSection />
    </section>
  )
}
