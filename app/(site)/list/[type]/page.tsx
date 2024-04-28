import { MovieType } from "@/shared/api/model/movie-info";
import RQProvider from "@/shared/lib/react-query/RQProvider";
import { InfinityListPage } from "@/views";

type Props = {
    params: {
        type: MovieType
    }
}

export default function Page({ params: { type } }: Props) {
    return <RQProvider>
        <InfinityListPage type={type}/>
    </RQProvider>
}
