/*
곧 개봉될 영화의 정보를 불러옵니다.
 */
import { QUERY_KEY } from "@/shared/api/constants/query-key";
import { DetailResponse } from "@/shared/api/model/detail-movie";

export async function getMovieDetail(movieId: string):Promise<DetailResponse> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}?language=ko-KR`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
        next: {
            tags: QUERY_KEY.movieDetail(movieId),
        },
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
