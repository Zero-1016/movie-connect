import { MovieType } from "@/shared/api/model/movie-info";
import { InfinityListBody, InfinityListHeader } from "@/widgets/movie-list";

type Props = {
    type: MovieType
}

export function InfinityListPage({ type }: Props) {
    return (
        <div style={{ padding: '100px 0 200px', margin: '0 auto' }}>
            <InfinityListHeader type={type}/>
            <InfinityListBody type={type}/>
        </div>
    )
}
