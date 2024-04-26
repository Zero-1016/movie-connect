import { Modal } from "@/shared/ui/Modal";

type Props = {
    params: {
        filePath: string
    }
}

export default function Page({ params: { filePath } }: Props) {
    console.log(filePath)
    return <Modal>:)</Modal>
}
