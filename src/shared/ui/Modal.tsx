"use client"

import CloseIcon from '@mui/icons-material/Close';
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

import RQProvider from "@/shared/lib/react-query/RQProvider";

import styles from './modal.module.scss'

export function Modal({ children }: PropsWithChildren) {
    const path = usePathname()
    const router = useRouter()
    const history = typeof window !== "undefined" ? window.history : []
    const modalOpen = path.split('/')[1] === "i"

    useEffect(() => {
        function getScrollbarWidth() {
            // 스크롤바를 포함하는 컨테이너를 생성
            const outer = document.createElement("div");
            outer.style.visibility = "hidden";
            outer.style.overflow = "scroll"; // 스크롤바가 확실히 나타나도록 설정
            document.body.appendChild(outer);

            // 내부 요소 추가
            const inner = document.createElement("div");
            outer.appendChild(inner);

            // 스크롤바 너비 계산
            const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

            // 생성된 요소 제거
            outer.parentNode?.removeChild(outer);

            return scrollbarWidth;
        }


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
            router.push('/home', { scroll: true })
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
