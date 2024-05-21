'use client'

import { Player } from '@lottiefiles/react-lottie-player'

type Props = {
  src: string
}

export function SignLottie({ src }: Props) {
  return <Player speed={1} autoplay loop src={src} style={{ width: 600, height: 600 }} />
}
