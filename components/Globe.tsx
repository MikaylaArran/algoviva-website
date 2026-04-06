'use client'

import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const globeRef = useRef<any>()

  useEffect(() => {
    let phi = 0.35

    globeRef.current = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0.35,
      theta: 0.2,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 20000,
      mapBrightness: 6,
      baseColor: [0.1, 0.15, 0.35],
      markerColor: [0.16, 0.25, 0.58],
      glowColor: [0.16, 0.25, 0.58],
      markers: [
        { location: [-26.2, 28.0], size: 0.08 },
        { location: [-33.9, 18.4], size: 0.05 },
      ],
      onRender: (state: Record<string, any>) => {
        phi += 0.003
        state.phi = phi
      },
    } as any)

    return () => globeRef.current?.destroy()
  }, [])

  return (
    <div style={{
      width: '100%',
      maxWidth: 560,
      margin: '0 auto',
      aspectRatio: '1',
    }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}