import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: 1700,
  padding: '0 200px',
  alignItems: 'center',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
})
