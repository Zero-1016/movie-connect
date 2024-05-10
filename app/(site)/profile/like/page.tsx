import { LikeBody } from "@/widgets/profile";

type Props = {
    searchParams: {
        page: number | undefined
    }
}

export default function Page({ searchParams: { page } }: Props) {
    return <LikeBody page={page}/>
}
