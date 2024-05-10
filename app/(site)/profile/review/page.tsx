import { ReviewBody } from "@/widgets/profile";

type Props = {
    searchParams: {
        page: number | undefined
    }
}

export default function Page({ searchParams: { page } }: Props) {
    return <ReviewBody page={page}/>
}
