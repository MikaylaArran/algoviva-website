'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

const ReactGlobe = dynamic(() => import('react-globe.gl'), { ssr: false })

const SOUTH_AFRICA_DOT = [
  {
    lat: -29.0,
    lng: 25.0,
    size: 0.8,
    color: '#00C2FF',
    label: 'Johannesburg, South Africa',
  },
]

export default function Globe() {
  const globeRef = useRef<any>(null)

  useEffect(() => {
    if (!globeRef.current) return
    const controls = globeRef.current.controls()
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.7
    controls.enableZoom = false
    controls.enablePan = false
    globeRef.current.pointOfView({ lat: -15, lng: 25, altitude: 1.6 }, 0)
  }, [])

  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
      <ReactGlobe
        ref={globeRef}
        width={560}
        height={560}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="https://unpkg.com/three-globe@2.31.0/example/img/earth-night.jpg"
        bumpImageUrl="https://unpkg.com/three-globe@2.31.0/example/img/earth-topology.png"
        pointsData={SOUTH_AFRICA_DOT}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointRadius="size"
        pointAltitude={0.05}
        pointLabel="label"
        atmosphereColor="#293F94"
        atmosphereAltitude={0.2}
      />
    </div>
  )
}