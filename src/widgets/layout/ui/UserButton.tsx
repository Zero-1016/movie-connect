'use client'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/navigation'
import { MouseEventHandler, useState } from 'react'

import { userMock } from '@/entities/mock/data/user-mock'
import { SITE_PATH } from '@/shared/constants'
import { notoSans } from '@/shared/font'
import { ProfileImage } from '@/shared/ui'

import styles from './user-button.module.scss'

export function UserButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const open = Boolean(anchorEl)

  const userData = userMock
  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorEl(event.currentTarget)
  }

  const logout = () => {
    console.info('로그아웃을 진행합니다.')
  }

  const handleClose: MouseEventHandler<HTMLLIElement> = event => {
    if (!('id' in event.target)) return

    if (event.target.id === 'profile') {
      router.push(SITE_PATH.my)
    } else {
      logout()
    }

    setAnchorEl(null)
  }

  return (
    <div className={styles.rightSection}>
      <Button
        className={styles.userButton}
        id="user-menu-button"
        aria-controls={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <span className={notoSans.className}>{userData.nickname}</span>
        <ProfileImage
          sx={{ width: '48px', height: '48px', border: '2px solid #02E7F5' }}
          src={userData.profileUrl ?? undefined}
          alt={userData.nickname + '프로필 이미지'}
        />
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
        <MenuItem id="profile" onClick={handleClose}>
          마이페이지
        </MenuItem>
        <MenuItem id="logout" onClick={handleClose}>
          로그아웃
        </MenuItem>
      </Menu>
    </div>
  )
}
