import { Suspense } from "react";

import { MovieContentForm, MovieImagesSlide } from "@/entities/ui";

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
                <MovieContentForm movieId={movieId}/>
            </Suspense>
        </section>
    )
}
