"use client"

import {Avatar} from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useRouter} from "next/navigation";
import {MouseEventHandler, useState} from "react";

import {userMock} from "@/shared/mock/user-mock";

import styles from './user-button.module.scss'


export function UserButton() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();
    const open = Boolean(anchorEl)

    const userData = userMock;
    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const logout = () => {
        console.info("로그아웃을 진행합니다.")
    }

    const handleClose: MouseEventHandler<HTMLLIElement> = (event) => {
        if (!('id' in event.target)) return;

        if (event.target.id === "profile") {
            router.push('/profile')
        } else {
            logout();
        }

        setAnchorEl(null);
    };

    return <div className={styles.rightSection}>
        <Button
            className={styles.userButton}
            id="user-menu-button"
            aria-controls={open ? 'user-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <Avatar src={userData.img_url} alt={userData.username + "프로필 이미지"}/>
            <span>{userData.username}</span>
        </Button>
        <Menu
            id="user-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'user-menu-button',
            }}
        >
            <MenuItem id="profile" onClick={handleClose}>마이페이지</MenuItem>
            <MenuItem id="logout" onClick={handleClose}>로그아웃</MenuItem>
        </Menu>
    </div>
}
