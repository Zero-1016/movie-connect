import { style } from '@vanilla-extract/css'

export const container = style({
  height: 600,
  display: 'flex',
  flex: 1,
  gap: 12,
  color: 'white',
  alignItems: 'flex-start',
  flexDirection: 'column',
})

export const title = style({
  fontSize: 80,
})

export const subTitle = style({
  minHeight: 24,
  minWidth: 1,
  fontSize: 20,
  lineHeight: '120%',
  whiteSpace: 'pre-wrap',
})

export const links = style({
  marginTop: 20,
  display: 'flex',
  gap: 10,
})
