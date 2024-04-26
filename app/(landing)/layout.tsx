import { PropsWithChildren } from 'react'

const style = {
    height: "100vh",
    maxHeight: "100dvh",
    width: "100%",
    maxWidth: "100dvw",
    overflow: "hidden",
}

export default function Layout({ children }: PropsWithChildren) {
    return <div style={style}>{children}</div>
}
