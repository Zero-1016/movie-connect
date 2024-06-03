'use client'

import { Input, InputLabel } from '@mui/material'
import Button from '@mui/material/Button'
import { notFound } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { ProfileImageChangeButton } from '@/features/profile/ui/ProfileImageChangeButton'
import { getImageWithDefault } from '@/shared/util'
import { ProfileTitle } from '@/widgets/profile/ProfileTitle'

import styles from './right-profile-section.module.scss'

export function ProfileBody() {
  const session = useSession()

  if (!session || !session.data || !session.data.user) {
    notFound()
  }

  const { email, name, image } = session.data.user

  if (!email || !name) {
    notFound()
  }

  return (
    <section className={styles.container}>
      <ProfileTitle />
      <div className={styles.contents}>
        <div className={styles.form}>
          <InputLabel className={styles.labelBox}>
            <span className={styles.labelName}>이메일</span>
            <Input className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={email} disabled />
          </InputLabel>
          <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.labelName}>닉네임</span>
            <div className={styles.inputButton}>
              <Input className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={name} />
              <Button variant="contained" size="small" className={styles.changeButton}>
                변경 하기
              </Button>
            </div>
          </InputLabel>
          <InputLabel>
            <span className={styles.labelName}>이전 비밀번호</span>
            <Input type="password" className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={name} />
          </InputLabel>
          <InputLabel>
            <span className={styles.labelName}>새 비밀번호</span>
            <Input type="password" className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={name} />
          </InputLabel>
          <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.labelName}>비밀번호 확인</span>
            <div className={styles.inputButton}>
              <Input type="password" className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={name} />
              <Button variant="contained" size="small" className={styles.changeButton}>
                변경 하기
              </Button>
            </div>
          </InputLabel>
        </div>
        <ProfileImageChangeButton image={getImageWithDefault(image)} nickname={name} />
      </div>
    </section>
  )
}
