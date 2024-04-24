import { Suspense } from "react";

import { MovieDetailModal, MovieDetailModalSkeleton } from "@/entities/modal";
import { Modal } from "@/shared/ui/Modal";

type Props = {
    params: {
        movieId: string
    }
}

export default function Page({ params }: Props) {
    return <Modal>
        <Suspense fallback={<MovieDetailModalSkeleton/>}>
            <MovieDetailModal movieId={params.movieId}/>
        </Suspense>
    </Modal>
}
