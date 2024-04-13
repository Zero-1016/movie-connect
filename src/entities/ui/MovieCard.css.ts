import { style } from '@vanilla-extract/css'

export const container = style({
  position: 'relative',
  width: '310px',
  height: '400px',
  background: 'aliceblue',
})

export const poster = style({
  position: 'relative',
  zIndex: 1,
})

export const backPath = style({
  width: 'inherit',
  height: 'inherit',
  position: 'absolute',
  zIndex: 2,
  transition: '0.5s',
  opacity: 0,
})

export const hoverBackPath = style({
  backgroundColor: 'black',
  opacity: 0.4,
})

export const movieCardBody = style({
  position: 'relative',
  zIndex: 3,
  transition: '0.6',
  opacity: 0,
  color: 'white',
})

export const hoverMovieCard = style({
  opacity: 1,
})
