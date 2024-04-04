export function LandingPage() {
  return (
    <div style={{ height: '100vh', width: '100%', overflowY: 'hidden', position: 'relative', zIndex: '-1' }}>
      <video style={{ height: 'inherit', width: 'inherit', objectFit: 'cover' }} muted autoPlay playsInline loop>
        <source src="/mp4/landing.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          height: 'inherit',
          width: 'inherit',
          backgroundColor: '#000000',
          opacity: '40%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}
