import { Suspense } from "react";

import { MovieReviewList } from "@/entities/ui";
import { MovieImagesSlide } from "@/entities/ui/MovieImagesSlide";

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
