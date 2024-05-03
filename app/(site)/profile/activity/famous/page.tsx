"use client"

import { usePathname } from "next/navigation";

export default function Page(){
    const path = usePathname()
    console.log(path)
    return <div>:)</div>
}
