import { QUERY_KEY } from "@/shared/api/constants";
import { MovieRequest, MoviesResponse } from "@/shared/api/model";

export const getPopular = async ({
                                     pageParam,
                                 }: MovieRequest): Promise<MoviesResponse> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/popular?language=ko-KR&page=${pageParam}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
        next: {
            tags: QUERY_KEY.popular(pageParam.toString()),
        },
        cache: 'no-store',
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
