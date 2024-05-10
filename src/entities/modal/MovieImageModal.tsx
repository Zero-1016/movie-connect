import Image from "next/image";

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
            <Image
                src={imageType === "backdrop" ? getImageUrl("backdrop", "/" + imageUrl, "w1280") : getImageUrl("poster", "/" + imageUrl, "w500")}
                alt={movieId + imageType} width={size[imageType].width}
                height={size[imageType].height}/>
        </div>
    </Modal>
}
