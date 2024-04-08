'use client'

import { useState } from 'react'

import * as style from './LandingBackGround.css'

export default function LandingBackGround() {
  const [isLoading, setLoading] = useState(false)

  const onLoadedData = () => setLoading(true)

  return (
    <>
      <video onCanPlay={onLoadedData} muted autoPlay playsInline loop>
        <source src="/mp4/landing.mp4" type="video/mp4" />
      </video>
      <div className={`${style.backGroundModal} ${isLoading && style.shadowBackGround}`} />
    </>
  )
}
