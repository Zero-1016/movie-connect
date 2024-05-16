import classNames from 'classnames'
import { PropsWithChildren } from 'react'

import { notoSans } from '@/shared/font/noto-sans'
import { poppins } from '@/shared/font/poppins'
import { quando } from '@/shared/font/quando'

export default function FontProvider({ children }: PropsWithChildren) {
  return <div className={classNames(notoSans.className, quando.className, poppins.className)}>{children}</div>
}
