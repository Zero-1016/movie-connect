/*
곧 개봉될 영화의 정보를 불러옵니다.
 */
import { QUERY_KEY } from "@/shared/api/constants/query-key";
import { ImageResponse } from "@/shared/api/model/image.info";

export async function getImages(movieId: string): Promise<ImageResponse> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/images?languages=en-EN`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
        next: {
            tags: QUERY_KEY.movieImages(movieId),
        },
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
