'use client'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { MouseEventHandler, useState } from 'react'
import { toast } from 'react-toastify'

import { SITE_PATH } from '@/shared/constants'
import { notoSans } from '@/shared/font'
import { ProfileImage } from '@/shared/ui'
import { getImageWithDefault } from '@/shared/util'

import styles from './user-button.module.scss'

export function UserButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const open = Boolean(anchorEl)
  const { data } = useSession()
  const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
    setAnchorEl(event.currentTarget)
  }

  const logout = async () => {
    await toast.promise(signOut(), {
      pending: '로그아웃 중입니다.',
      success: '로그아웃 합니다.',
      error: '로그아웃에 실패하였습니다.',
    })
  }

  const handleClose: MouseEventHandler<HTMLLIElement> = async event => {
    if (!('id' in event.target)) return

    if (event.target.id === 'profile') {
      router.push(SITE_PATH.my)
    } else if (event.target.id === 'logout') {
      await logout()
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
        <span className={notoSans.className}>{data?.user?.name}</span>
        <ProfileImage
          sx={{ width: '48px', height: '48px', border: '2px solid #02E7F5' }}
          src={getImageWithDefault(data?.user?.image)}
          alt={data?.user?.name + '프로필 이미지'}
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
