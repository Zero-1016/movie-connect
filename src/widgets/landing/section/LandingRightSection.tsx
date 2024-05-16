import classNames from 'classnames'

import styles from './landing-right-section.module.scss'

export function LandingRightSection() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>1</div>
      <div className={classNames(styles.card, styles.hidden)}>2</div>
    </div>
  )
}
