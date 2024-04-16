import { Suspense } from "react";

import { MovieBanner } from "@/entities/ui";

export function MainBannerSection() {
    return <section>
        <Suspense>
            <MovieBanner/>
        </Suspense>
    </section>
}
