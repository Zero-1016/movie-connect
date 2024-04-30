import Image from "next/image";

import { IMAGE_SIZE } from "@/shared/api/constants";
import { getImageUrl } from "@/shared/api/lib";
import { Modal } from "@/shared/ui/Modal";

import styles from './movie-image-modal.module.scss'

type Props = {
    movieId: string
    imageType: "backdrop" | "poster"
    imageUrl: string
}

export function MovieImageModal({
                                    imageUrl, imageType, movieId
                                }: Props) {
    let getSize = ""

    switch (imageType) {
        case "backdrop":
            getSize = IMAGE_SIZE.backdrop.w1280
            break
        case "poster":
            getSize = IMAGE_SIZE.poster.w500
            break
    }

    const size = {
        "backdrop": {
            width: 1080,
            height: 607
        },
        "poster": {
            width: 500,
            height: 750
        }
    }


    return <Modal>
        <div className={styles.container}>
            <Image src={getImageUrl("/" + imageUrl, getSize)} alt={movieId + imageType} width={size[imageType].width}
                   height={size[imageType].height}/>
        </div>
    </Modal>
}
