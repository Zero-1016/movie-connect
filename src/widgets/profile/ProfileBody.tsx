"use client"

import { Avatar, Input, InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

import { EditButton, ProfileTitle } from "@/features/profile";
import { userMock } from "@/shared/mock/data";

import styles from './profile-body.module.scss'

export function ProfileBody() {
    const [{ nickname, profileUrl, email }, _setUserState] = useState(userMock)
    const [_file, setFile] = useState<File | null>(null)

    return <section className={styles.container}>
        <ProfileTitle/>
        <div className={styles.contents}>
            <div className={styles.form}>
                <InputLabel className={styles.labelBox}>
                        <span className={styles.labelName}>
                        이메일
                        </span>
                    <Input className={styles.input} sx={{ background: "#8E95A9" }} defaultValue={email} disabled/>
                </InputLabel>
                <InputLabel sx={{ display: "flex", alignItems: "center" }}>
                        <span className={styles.labelName}>
                        닉네임
                        </span>
                    <div className={styles.inputButton}>
                        <Input className={styles.input} sx={{ background: "#8E95A9" }} defaultValue={nickname}/>
                        <Button variant="contained" size="small" className={styles.changeButton}>변경 하기</Button>
                    </div>
                </InputLabel>
                <InputLabel>
                        <span className={styles.labelName}>
                        이전 비밀번호
                        </span>
                    <Input type="password" className={styles.input} sx={{ background: "#8E95A9" }}
                           defaultValue={nickname}/>
                </InputLabel>
                <InputLabel>
                        <span className={styles.labelName}>
                        새 비밀번호
                        </span>
                    <Input type="password" className={styles.input} sx={{ background: "#8E95A9" }}
                           defaultValue={nickname}/>
                </InputLabel>
                <InputLabel sx={{ display: "flex", alignItems: "center" }}>
                        <span className={styles.labelName}>
                        비밀번호 확인
                        </span>
                    <div className={styles.inputButton}>
                        <Input type="password" className={styles.input} sx={{ background: "#8E95A9" }}
                               defaultValue={nickname}/>
                        <Button variant="contained" size="small" className={styles.changeButton}>변경 하기</Button>
                    </div>
                </InputLabel>
            </div>
            <div className={styles.imageBox}>
                <Avatar src={profileUrl ?? undefined} alt={nickname + "프로필 이미지"} sx={{ width: 200, height: 200 }}/>
                <EditButton setFile={setFile}/>
            </div>
        </div>
    </section>
}