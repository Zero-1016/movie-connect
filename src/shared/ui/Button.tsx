import classNames from 'classnames'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { pretendard } from '@/shared/pretendard'

import * as style from './Button.css'

type Props = ComponentPropsWithoutRef<'button'>

export function Button({ children, ...rest }: PropsWithChildren<Props>) {
  return (
    <div className={style.container}>
      <button className={classNames(style.button, pretendard.className)} {...rest}>
        {children}
      </button>
    </div>
  )
}
