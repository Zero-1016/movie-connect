'use client'

import { Input, InputLabel } from '@mui/material'
import Button from '@mui/material/Button'
import { useState } from 'react'

import { userMock } from '@/entities/mock/data'
import { ProfileImageChangeButton } from '@/features/profile/ui/ProfileImageChangeButton'
import { getImageWithDefault } from '@/shared/util'
import { ProfileTitle } from '@/widgets/profile/ProfileTitle'

import styles from './right-profile-section.module.scss'

export function ProfileBody() {
  const [{ nickname, profileUrl, email }, _setUserState] = useState(userMock)

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
              <Input className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={nickname} />
              <Button variant="contained" size="small" className={styles.changeButton}>
                변경 하기
              </Button>
            </div>
          </InputLabel>
          <InputLabel>
            <span className={styles.labelName}>이전 비밀번호</span>
            <Input type="password" className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={nickname} />
          </InputLabel>
          <InputLabel>
            <span className={styles.labelName}>새 비밀번호</span>
            <Input type="password" className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={nickname} />
          </InputLabel>
          <InputLabel sx={{ display: 'flex', alignItems: 'center' }}>
            <span className={styles.labelName}>비밀번호 확인</span>
            <div className={styles.inputButton}>
              <Input type="password" className={styles.input} sx={{ background: '#8E95A9' }} defaultValue={nickname} />
              <Button variant="contained" size="small" className={styles.changeButton}>
                변경 하기
              </Button>
            </div>
          </InputLabel>
        </div>
        <ProfileImageChangeButton profileUrl={getImageWithDefault(profileUrl)} nickname={nickname} />
      </div>
    </section>
  )
}
