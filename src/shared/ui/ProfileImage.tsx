'use client'

import { Avatar } from '@mui/material'
import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<typeof Avatar>

export function ProfileImage({ ...rest }: Props) {
  return <Avatar {...rest} />
}
