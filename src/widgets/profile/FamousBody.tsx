import { MovieContentList } from "@/entities/ui";
import { ProfileTitle } from "@/features/profile";
import { generateContents } from "@/shared/mock/construct";

type Props = {
    page?: number
}

export function FamousBody({ page = 1 }: Readonly<Props>) {
    const contentList = generateContents(page + 9)
    return <section>
        <ProfileTitle/>
        <div style={{ padding: "20px 0 50px" }}>
            <MovieContentList contentList={contentList}/>
        </div>
    </section>
}
