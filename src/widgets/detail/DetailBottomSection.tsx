import { Suspense } from "react";

import { MovieImagesSlide, MovieReviewList } from "@/entities/ui";

type Props = {
    movieId: string
}

export function DetailBottomSection({ movieId }: Props) {
    return (
        <section>
            <Suspense>
                <MovieImagesSlide movieId={movieId}/>
            </Suspense>
            <Suspense>
                <MovieReviewList movieId={movieId}/>
            </Suspense>
        </section>
    )
}
