import { Suspense } from "react";

import RQProvider from "@/shared/lib/react-query/RQProvider";
import { DetailBottomSection, DetailMiddleSection, DetailSkeletonSection, DetailTopSection } from "@/widgets/detail";

type Props = {
    movieId: string
}

export function DetailPage({ movieId }: Props) {
    return <RQProvider>
        <Suspense fallback={<DetailSkeletonSection/>}>
            <DetailTopSection movieId={movieId}/>
            <DetailMiddleSection movieId={movieId}/>
            <DetailBottomSection movieId={movieId}/>
        </Suspense>
    </RQProvider>
}
