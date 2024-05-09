import { generateComments } from "@/shared/mock/construct";
import { ReviewBody } from "@/widgets/profile";

export default function Page() {
    const commentList = generateComments(10)
    return <ReviewBody reviewList={commentList}/>
}
