import { ReviewBody } from "@/widgets/profile";

type Props = {
    searchParams: {
        page: string
    }
}

export default function Page({ searchParams: { page = "1" } }: Props) {
    return <ReviewBody page={page}/>
}
