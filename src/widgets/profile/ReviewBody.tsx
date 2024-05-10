import { MovieContentList } from "@/entities/ui";
import { ProfileTitle } from "@/features/profile";
import { generateContents } from "@/shared/mock/construct";

type Props = {
    page: string
}

export function ReviewBody({}: Readonly<Props>) {
    const contentList = generateContents(10)
    
    return <section>
        <ProfileTitle/>
        <div style={{ padding: "20px 0 50px" }}>
            <MovieContentList contentList={contentList}/>
        </div>
    </section>
}
