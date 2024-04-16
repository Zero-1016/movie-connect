'use client'

import { useState } from 'react'

import styles from './landing-back-ground.module.scss'

export function LandingBackGround() {
  const [isLoading, setLoading] = useState(false)

  const onLoadedData = () => setLoading(true)

  return (
    <div className={styles.backgroundPosition}>
      <video className={styles.landingVideo} onCanPlay={onLoadedData} muted autoPlay playsInline loop>
        <source src="/mp4/landing.mp4" type="video/mp4" />
      </video>
      <div className={`${styles.backGroundModal} ${isLoading && styles.shadowBackGround}`} />
    </div>
  )
}
