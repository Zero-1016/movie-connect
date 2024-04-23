import { HeaderSearchBar } from "@/features/Layout/HeaderSearchBar";
import { MainLogo } from "@/features/Layout/MainLogo";
import { UserButton } from "@/features/Layout/UserButton";

import styles from './header.module.scss'

export function Header() {
    return <header className={styles.container}>
        <MainLogo/>
        <HeaderSearchBar/>
        <UserButton/>
    </header>
}

