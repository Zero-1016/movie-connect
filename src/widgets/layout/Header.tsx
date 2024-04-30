"use client"

import classNames from "classnames";
import { useEffect, useState } from "react";

import { HeaderNav, HeaderSearchBar, MainLogo, UserButton } from "@/features/Layout";

import styles from './header.module.scss'

export function Header() {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 500) {
                setIsHeaderHidden(true);
            } else {
                setIsHeaderHidden(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <header className={classNames(styles.container, isHeaderHidden && styles.hidden)}>
        <div className={styles.box}>
            <div className={styles.section}>
                <MainLogo/>
                <HeaderNav/>
            </div>
            <div className={styles.section}>
                <HeaderSearchBar/>
                <UserButton/>
            </div>
        </div>
    </header>
}

