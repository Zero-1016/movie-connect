"use client"

import { Suspense } from "react";

import { MovieDetailContent, MovieDetailContentSkeleton } from "@/entities/modal";
import { Modal } from "@/shared/ui/Modal";
import { ModalContent } from "@/shared/ui/ModalContent";

type Props = {
    movieId: string
}

export function MovieDetailModal({ movieId }: Props) {
    return <Modal>
        <ModalContent>
            <Suspense fallback={<MovieDetailContentSkeleton/>}>
                <MovieDetailContent movieId={movieId}/>
            </Suspense>
        </ModalContent>
    </Modal>
}
