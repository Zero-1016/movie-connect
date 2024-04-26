"use client"

import classNames from "classnames";
import { useEffect, useState } from "react";

import { HeaderSearchBar } from "@/features/Layout/HeaderSearchBar";
import { MainLogo } from "@/features/Layout/MainLogo";
import { UserButton } from "@/features/Layout/UserButton";

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
        <MainLogo/>
        <HeaderSearchBar/>
        <UserButton/>
    </header>
}

