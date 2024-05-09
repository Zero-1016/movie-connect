import { MoviesResponse } from "@/shared/api/model";
import { movieListMock } from "@/shared/mock/data";

export function generateMovie(numArrays: number): MoviesResponse {
    const total_results = Math.floor(Math.random() * 300)

    const mockData: MoviesResponse = {
        results: Array(numArrays).fill('').map(() => {
            return movieListMock.results[Math.floor(Math.random() * movieListMock.results.length)]
        }),
        page: 1,
        total_results,
        total_pages: Math.floor(total_results / 20)
    };

    return mockData;
}
