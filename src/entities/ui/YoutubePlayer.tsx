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
            autoplay: 1,
            controls: 0,
            modestbranding: 0,
            setVolume: 40,
            setPlaybackQuality: "default"
        },
    };

    return <YouTube  videoId={videoId} opts={opts} onError={endMovie}
                    onEnd={endMovie} onReady={onPlayerReady}/>;
}
