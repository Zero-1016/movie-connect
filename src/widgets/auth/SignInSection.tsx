import { SignInForm } from '@/features/auth/ui'
import { SignLottie } from '@/widgets/auth/SignLottie'

import styles from './sign-section.module.scss'

export function SignInSection() {
  return (
    <section className={styles.container}>
      <SignLottie src="/lottie/movie-sign-in.json" />
      <div className={styles.actionBox}>
        <h4 className={styles.actionTitle}>로그인</h4>
        <div className={styles.form}>
          <SignInForm />
        </div>
      </div>
    </section>
  )
}
