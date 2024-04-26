"use client"

import { usePathname } from "next/navigation";

import { MovieDetailModal } from "@/entities/modal";

type Props = {
    params: {
        movieId: string
    }
}

export default function Page({ params }: Props) {
    const isHidden = usePathname().split('/')[1] === "i"

    return isHidden ? <MovieDetailModal movieId={params.movieId}/> : null
}
