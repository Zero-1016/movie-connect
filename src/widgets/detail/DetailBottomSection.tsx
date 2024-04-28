import { Suspense } from "react";

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
        </section>
    )
}
