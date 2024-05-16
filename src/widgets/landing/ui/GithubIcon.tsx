import { Github } from 'lucide-react'
import Link from 'next/link'

import styles from './github-icon.module.scss'

type Props = {
  href: string
}

export function GithubIcon({ href }: Props) {
  return (
    <Link className={styles.iconBox} href={href}>
      <Github size={32} stroke="#000000" />
    </Link>
  )
}
