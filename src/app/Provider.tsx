import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import classNames from "classnames";
import { PropsWithChildren } from 'react'

import { MSWComponent } from "@/app/MSWComponent";
import { notoSans } from "@/shared/style/noto-sans";
import { poppins } from "@/shared/style/poppins";
import { quando } from "@/shared/style/quando";

export default function Provider({ children }: PropsWithChildren) {
    return (
        <AppRouterCacheProvider>
            <MSWComponent/>
            <div className={classNames(notoSans.className, quando.className, poppins.className)}>{children}</div>
        </AppRouterCacheProvider>
    )
}
