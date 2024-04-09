import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  width: '100%',
  height: '100%',
})

export const card = style({
  width: '100%',
  height: '100%',
  maxWidth: 280,
  maxHeight: 480,
  border: '2px solid red',
})
