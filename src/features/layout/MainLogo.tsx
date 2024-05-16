import Image from 'next/image'
import Link from 'next/link'

import { SITE_PATH } from '@/shared/constants'

import mainLogo from '../../../public/svg/main-title-logo.svg'
import styles from './main-logo.module.scss'

export function MainLogo() {
  return (
    <Link href={SITE_PATH.home} className={styles.container}>
      <div className={styles.leftSection}>
        <Image src={mainLogo} alt="메인로고" height={40} width={220} />
      </div>
    </Link>
  )
}
