import { Suspense } from "react";

import { SearchHeader, SearchList } from "@/widgets/search";

type Props = {
    keyword: string
}

export function SearchPage({ keyword }: Props) {
    return <div style={{ minHeight: 'calc(100vh - 264px)' }}>
        <SearchHeader keyword={keyword}/>
        <Suspense>
            <SearchList keyword={keyword}/>
        </Suspense>
    </div>
}
