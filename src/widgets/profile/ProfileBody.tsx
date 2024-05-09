"use client"

import { Avatar } from "@mui/material";
import { useState } from "react";

import { EditButton, ProfileTitle } from "@/features/profile";
import { userMock } from "@/shared/mock/data";

import styles from './profile-body.module.scss'

export function ProfileBody() {
    const [{ nickname, profileUrl }, _setUserState] = useState(userMock)
    const [_file, setFile] = useState<File | null>(null)

    return <section className={styles.container}>
        <ProfileTitle/>
        <div className={styles.imageBox}>
            <Avatar src={profileUrl ?? undefined} alt={nickname + "프로필 이미지"} sx={{ width: 300, height: 300 }}/>
            <EditButton setFile={setFile}/>
        </div>
    </section>
}
