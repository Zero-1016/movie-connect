import { CircularProgress } from '@mui/material'

export function SearchBottomSkeleton() {
  return (
    <div
      style={{
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </div>
  )
}
