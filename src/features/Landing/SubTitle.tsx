'use client'

import { useTextInterval } from '@/features/Landing/hooks'
import * as style from '@/features/Landing/LandingLeftSection.css'

type Props = {
  subTitleList: readonly string[]
}

export function SubTitle({ subTitleList }: Props) {
  const subTitle = useTextInterval(subTitleList, 100)
  return <div className={style.subTitle}>{subTitle}</div>
}
