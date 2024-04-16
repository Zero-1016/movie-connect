import { Videos } from "@/entities/model/video-info";

export const getVideos = async (movie_id: number): Promise<Videos> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movie_id}/videos?language=ko-KR`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
        next: {
            tags: ['movies', 'videos', movie_id.toString()],
        },
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
