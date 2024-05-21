import { SignUpForm } from '@/features/auth/SignUpForm'
import { SignLottie } from '@/widgets/auth/SignLottie'

import styles from './sign-section.module.scss'

export function SignUpSection() {
  return (
    <section className={styles.container}>
      <SignLottie src="/lottie/movie-sign-up.json" />
      <div className={styles.actionBox}>
        <h4 className={styles.actionTitle}>회원가입</h4>
        <div className={styles.form}>
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}
