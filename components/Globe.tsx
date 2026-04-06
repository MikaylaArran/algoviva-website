'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

// Must be dynamically imported — no SSR, needs browser/WebGL
const ReactGlobe = dynamic(() => import('react-globe.gl'), { ssr: false })

const SOUTH_AFRICA_DOT = [
  {
    lat: -29.0,
    lng: 25.0,
    size: 0.6,
    color: '#293F94',
    label: 'Johannesburg, South Africa',
  },
]

export default function Globe() {
  const globeRef = useRef<any>(null)

  useEffect(() => {
    if (!globeRef.current) return

    // Start auto-rotation
    const controls = globeRef.current.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.6
    controls.enableZoom = false
    controls.enablePan = false

    // Point camera at Africa on load
    globeRef.current.pointOfView({ lat: -15, lng: 25, altitude: 1.8 }, 0)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
      <ReactGlobe
        ref={globeRef}
        width={480}
        height={480}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={SOUTH_AFRICA_DOT}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.02}
        pointLabel="label"
        atmosphereColor="#293F94"
        atmosphereAltitude={0.18}
      />
    </div>
  )
}