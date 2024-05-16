'use client'

import { Player } from '@lottiefiles/react-lottie-player'

import { NotFoundFooter } from '@/widgets/not-found'

import lottieJson from '../../public/lottie/movie-animation.json'

export function NotFoundPage() {
  return (
    <section>
      <Player speed={2} autoplay loop src={lottieJson} style={{ width: 700, height: 600 }} />
      <NotFoundFooter />
    </section>
  )
}
