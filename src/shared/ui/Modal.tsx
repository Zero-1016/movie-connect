"use client"

import CloseIcon from '@mui/icons-material/Close';
import {useRouter} from "next/navigation";
import {PropsWithChildren, useEffect} from "react";

import RQProvider from "@/shared/lib/react-query/RQProvider";
import {getScrollbarWidth} from "@/shared/lib/util";

import styles from './modal.module.scss'

export function Modal({children}: PropsWithChildren) {
    const router = useRouter()
    const history = typeof window !== "undefined" ? window.history : []

    useEffect(() => {
        const width = getScrollbarWidth();

        if (Object.is(width, undefined)) return

        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${width}px`;

        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = '0px';
        };
    }, []);

    const onClickBack = () => {
        if (history.length) {
            router.back()
        } else {
            router.push('/home', {scroll: true})
        }
    }

    const onInnerClick = (e: React.MouseEvent) => {
        e.stopPropagation()

    }

    return <RQProvider>
        <div className={styles.container} onClick={onClickBack}>
            <CloseIcon className={styles.closeButton}/>
            {children}</div>
    </RQProvider>
}
