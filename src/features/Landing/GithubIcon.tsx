import { Github } from 'lucide-react'
import Link from 'next/link'

import * as style from './GithubIcon.css'

type Props = {
  href: string
}

export function GithubIcon({ href }: Props) {
  return (
    <Link className={style.iconBox} href={href}>
      <Github size={32} stroke="#000000" />
    </Link>
  )
}
