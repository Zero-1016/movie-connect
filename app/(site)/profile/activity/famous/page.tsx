import { generateComments } from "@/shared/mock/construct";
import { FamousBody } from "@/widgets/profile";

export default function Page() {
  const commentList = generateComments(10)
  return <FamousBody famousLineList={commentList}/>
}
