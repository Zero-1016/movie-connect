import YouTube, { YouTubeProps } from "react-youtube";

type Props = {
    videoId: string
    endMovie: () => void
}

/*
Todo

새로 고침시 영상 자동 재생 현재 일시정지

 */

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
        },
    };

    return <YouTube videoId={videoId} opts={opts}
                    onEnd={endMovie} onReady={onPlayerReady}/>;
}
