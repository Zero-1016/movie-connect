import { PropsWithChildren } from "react";

import { Footer, Header } from "@/features/Layout";

export default function Layout({ children }: PropsWithChildren) {
    return <>
        <Header/>
        {children}
        <Footer/>
    </>
}
