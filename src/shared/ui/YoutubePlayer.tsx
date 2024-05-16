'use client'

import YouTube, { YouTubeProps } from 'react-youtube'

type Props = {
  videoId: string
  endMovie: () => void
}

export function YoutubePlayer(props: Props) {
  const onPlayerReady: YouTubeProps['onReady'] = event => {
    event.target.playVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '600px',
    width: '100%',
    playerVars: {
      allow: 'autoplay; encrypted-media;',
      autoplay: 1,
      rel: 0,
      mute: 1,
      controls: 0,
      modestbranding: 1,
    },
  }

  return (
    <YouTube
      videoId={props.videoId}
      onPause={event => event.target.playVideo()}
      opts={opts}
      onError={props.endMovie}
      onEnd={props.endMovie}
      onReady={onPlayerReady}
    />
  )
}
