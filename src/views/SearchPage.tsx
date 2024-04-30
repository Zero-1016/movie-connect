import { Suspense } from "react";

import RQProvider from "@/shared/lib/react-query/RQProvider";
import { SearchHeader, SearchList } from "@/widgets/search";

type Props = {
    keyword: string
}

export function SearchPage({ keyword }: Props) {
    return <RQProvider>
        <div style={{ minHeight: 'calc(100vh - 264px)' }}>
            <SearchHeader keyword={keyword}/>
            <Suspense>
                <SearchList keyword={keyword}/>
            </Suspense>
        </div>
    </RQProvider>
}
