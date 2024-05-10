import { FamousBody } from "@/widgets/profile";

type Props = {
    searchParams: {
        page: number | undefined
    }
}

export default function Page({ searchParams: { page } }: Props) {
    return <FamousBody page={page}/>
}
