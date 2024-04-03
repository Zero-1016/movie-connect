import { ReactNode } from "react";

import FontProvider from "@/app/FontProvider";

export default function Provider({ children }: { children: ReactNode }) {
    return <FontProvider>{children}</FontProvider>
}
