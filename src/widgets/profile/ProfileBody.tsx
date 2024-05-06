"use client"

import { Avatar } from "@mui/material";
import { useState } from "react";

import { EditButton, ProfileTitle } from "@/features/profile";
import { userMock } from "@/shared/mock";

import styles from './profile-body.module.scss'

export function ProfileBody() {
    const [{ username, img_url }, setUserState] = useState(userMock)
    const [file, setFile] = useState<File | null>(null)

    console.log(file)
    return <section className={styles.container}>
        <ProfileTitle/>
        <div className={styles.imageBox}>
            <Avatar src={img_url} alt={username + "프로필 이미지"} sx={{ width: 300, height: 300 }}/>
            <EditButton setFile={setFile}/>
        </div>
    </section>
}
