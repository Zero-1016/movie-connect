import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import classNames from "classnames";
import { PropsWithChildren } from 'react'

import { notoSans } from "@/shared/noto-sans";
import { poppins } from "@/shared/poppins";
import { quando } from "@/shared/quando";

export default function Provider({ children }: PropsWithChildren) {
    return (
        <AppRouterCacheProvider>
            <div className={classNames(quando.className, poppins.className, notoSans.className)}>{children}</div>
        </AppRouterCacheProvider>
    )
}
