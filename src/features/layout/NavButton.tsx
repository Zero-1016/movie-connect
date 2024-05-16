'use client'

import { Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import classNames from 'classnames'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

import styles from './nav-button.module.scss'

type Props = {
  activeSvg: ReactNode
  notActiveSvg: ReactNode
  link: string
  title: string
  tooltip?: string
  activeAllow?: boolean
}

export function NavButton({ title, notActiveSvg, activeSvg, link, activeAllow = false, tooltip }: Props) {
  const router = useRouter()
  const path = usePathname()
  const isActive = path === link

  const onClick = () => {
    router.push(link)
  }

  const styleActive = activeAllow && isActive && styles.active

  if (tooltip) {
    return (
      <Tooltip title={tooltip}>
        <Button className={classNames(styles.button, styleActive)} onClick={onClick}>
          {isActive ? activeSvg : notActiveSvg}
          <span>{title}</span>
        </Button>
      </Tooltip>
    )
  }

  return (
    <Button className={classNames(styles.button, styleActive)} onClick={onClick}>
      {tooltip ? (
        <Tooltip title={tooltip}>
          <>
            {isActive ? activeSvg : notActiveSvg}
            {title}
          </>
        </Tooltip>
      ) : (
        <>
          {isActive ? activeSvg : notActiveSvg}
          {title}
        </>
      )}
    </Button>
  )
}
