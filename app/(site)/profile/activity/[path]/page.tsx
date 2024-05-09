import { notFound } from "next/navigation";

import { FamousBody, LikeBody, ReviewBody } from "@/widgets/profile";

type Props = {
    params: {
        path: string
    }
}

export default function Page({ params: { path } }: Readonly<Props>) {
    switch (path) {
        case "famous":
            return <FamousBody/>
        case "review":
            return <ReviewBody/>
        case "like":
            return <LikeBody/>
        default:
            notFound()
            return null
    }
}
