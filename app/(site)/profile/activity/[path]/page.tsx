import { PROFILE_PATH } from "@/features/profile/constants";
import { FamousBody, LikeBody, ReviewBody } from "@/widgets/profile";

type Props = {
    params: {
        path: Omit<keyof typeof PROFILE_PATH, "profile">
    }
}

export default function Page({ params: { path } }: Props) {
    switch (path) {
        case "famous":
            return <FamousBody/>
        case "review":
            return <ReviewBody/>
        case "like":
            return <LikeBody/>
        default:
            return null
    }
}
