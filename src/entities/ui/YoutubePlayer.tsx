"use client"

import YouTube, { YouTubeProps } from "react-youtube";

type Props = {
    videoId: string
    endMovie: () => void
}

export function YoutubePlayer({ videoId, endMovie }: Props) {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.playVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '600px',
        width: '100%',
        playerVars: {
            allow: "autoplay; encrypted-media;",
            autoplay: 1,
            rel: 0,
            controls: 0,
            modestbranding: 1,
            setVolume: 40,
            vq: 'hd1080'
        },
    };

    return <YouTube videoId={videoId} opts={opts} onError={endMovie}
                    onEnd={endMovie} onReady={onPlayerReady}/>;
}
