import { PropsWithChildren } from 'react'

import * as style from './layout.css'

export default function Layout({ children }: PropsWithChildren) {
  return <div className={style.container}>{children}</div>
}
