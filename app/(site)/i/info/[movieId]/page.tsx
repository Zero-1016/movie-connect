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

    if (!isHidden) return null

    return <div style={{ position: 'fixed', zIndex: 9999, top: 0, left: 0 }}>
        <MovieDetailModal movieId={params.movieId}/>
    </div>
}
