import { style } from '@vanilla-extract/css'

export const backgroundPosition = style({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -1,
})

export const landingVideo = style({
  width: 'inherit',
  height: 'inherit',
  objectFit: 'cover',
})

export const backGroundModal = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: `100%`,
  height: `100%`,
  transition: '1s',
})

export const shadowBackGround = style({
  opacity: '40%',
})
