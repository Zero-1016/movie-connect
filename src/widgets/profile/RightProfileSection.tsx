'use client'

import { notFound } from 'next/navigation'
import { useSession } from 'next-auth/react'

import { UserEmailFiled } from '@/features/profile/ui'
import { ProfileImageChangeButton } from '@/features/profile/ui/ProfileImageChangeButton'
import { UserNickNameChangeFiled } from '@/features/profile/ui/UserNickNameChangeFiled'
import { UserPasswordChangeFiled } from '@/features/profile/ui/UserPasswordChangeFiled'
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
          <UserEmailFiled email={email} />
          <UserNickNameChangeFiled />
          <UserPasswordChangeFiled />
        </div>
        <ProfileImageChangeButton image={getImageWithDefault(image)} nickname={name} />
      </div>
    </section>
  )
}
