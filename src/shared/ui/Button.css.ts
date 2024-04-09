import { style } from '@vanilla-extract/css'

export const container = style({
  marginTop: 60,
  width: 200,
  height: 60,
  border: '2px solid white',
  backgroundColor: 'inherit',
  borderRadius: 32,
})

export const button = style({
  borderRadius: 'inherit',
  backgroundColor: 'inherit',
  border: 'none',
  width: '100%',
  height: '100%',
  fontSize: 20,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: '0.5s',
  ':hover': {
    color: '#fffffe',
    scale: '105%',
  },
})
