import { MovieContentList } from "@/entities/ui";
import { ProfileTitle } from "@/features/profile";
import { Content } from "@/shared/api/model";

type Props = {
    famousLineList: Content[]
}

export function FamousBody({ famousLineList }: Props) {
    return <>
        <ProfileTitle/>
        <div style={{padding: "20px 0 50px"}}>
            <MovieContentList contentList={famousLineList}/>
        </div>
    </>
}
