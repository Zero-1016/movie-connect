import { Suspense } from "react";

import { MovieDetailModal } from "@/entities/modal";
import { Modal } from "@/shared/ui/Modal";

import styles from './page.module.scss'

type Props = {
    params: {
        movieId: string
    }
}

export default function Page({ params }: Props) {
    return <div className={styles.container}>
        <Modal>
            <Suspense>
                <MovieDetailModal movieId={params.movieId}/>
            </Suspense>
        </Modal>
    </div>
}