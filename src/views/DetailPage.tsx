import { Suspense } from "react";

import RQProvider from "@/shared/lib/react-query/RQProvider";
import { DetailBottomSection, DetailMiddleSection, DetailTopSection } from "@/widgets/Detail";

type Props = {
    movieId: string
}

export function DetailPage({ movieId }: Props) {
    return <RQProvider>
        <Suspense>
            <DetailTopSection movieId={movieId}/>
        </Suspense>
        <Suspense>
            <DetailMiddleSection movieId={movieId}/>
        </Suspense>
        <Suspense>
            <DetailBottomSection movieId={movieId}/>
        </Suspense>
    </RQProvider>
}
