"use client"

import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

import { SITE_PATH } from "@/shared/constants";

import styles from './guest-buttons.module.scss'

export function GuestButtons() {
    const router = useRouter()

    const moveToSignIn = () => {
        router.push(SITE_PATH.sign_in_modal)
    }

    const moveToSignUp = () => {
        router.push(SITE_PATH.sign_up_modal)
    }

    return <div className={styles.container}>
        <Button onClick={moveToSignIn} size="medium" color="inherit" variant="outlined">로그인</Button>
        <Button onClick={moveToSignUp} size="medium" color="inherit" variant="outlined">회원 가입</Button>
    </div>
}
