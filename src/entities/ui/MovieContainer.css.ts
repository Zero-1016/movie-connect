import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
})

export const listHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
})

export const link = style({
  textDecoration: 'none',
  color: 'black',
  fontWeight: 'bold',
})
