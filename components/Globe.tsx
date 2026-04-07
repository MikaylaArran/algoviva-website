'use client'

import { useEffect, useRef } from 'react'

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const rotRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const c: CanvasRenderingContext2D = ctx

    const S = 560
    canvas.width = S
    canvas.height = S
    const cx = S / 2
    const cy = S / 2
    const R = S * 0.38

    function project(lat: number, lng: number, rot: number) {
      const phi = (lat * Math.PI) / 180
      const lam = ((lng + rot) * Math.PI) / 180
      const x = cx + R * Math.cos(phi) * Math.sin(lam)
      const y = cy - R * Math.sin(phi)
      const z = Math.cos(phi) * Math.cos(lam)
      return { x, y, z }
    }

    const landDots: [number, number][] = []

    // Africa
    for (let lat = -35; lat <= 37; lat += 3.5) {
      for (let lng = -18; lng <= 51; lng += 3.5) {
        const ok = (
          (lat >= -35 && lat <= -25 && lng >= 16 && lng <= 33) ||
          (lat >= -25 && lat <= -15 && lng >= 12 && lng <= 40) ||
          (lat >= -15 && lat <= 0  && lng >= 10 && lng <= 42) ||
          (lat >= 0   && lat <= 10 && lng >= -5 && lng <= 42) ||
          (lat >= 10  && lat <= 20 && lng >= -18 && lng <= 43) ||
          (lat >= 20  && lat <= 37 && lng >= -5 && lng <= 37)
        )
        if (ok) landDots.push([lat, lng])
      }
    }

    // Europe
    for (let lat = 35; lat <= 70; lat += 3.5) {
      for (let lng = -10; lng <= 40; lng += 3.5) {
        const ok = (
          (lat >= 35 && lat <= 45 && lng >= -5 && lng <= 36) ||
          (lat >= 45 && lat <= 55 && lng >= -5 && lng <= 30) ||
          (lat >= 55 && lat <= 70 && lng >= 5 && lng <= 30)
        )
        if (ok) landDots.push([lat, lng])
      }
    }

    // Asia
    for (let lat = 0; lat <= 70; lat += 3.5) {
      for (let lng = 40; lng <= 145; lng += 3.5) {
        const ok = (
          (lat >= 0  && lat <= 20 && lng >= 60 && lng <= 105) ||
          (lat >= 20 && lat <= 40 && lng >= 40 && lng <= 125) ||
          (lat >= 40 && lat <= 55 && lng >= 40 && lng <= 135) ||
          (lat >= 55 && lat <= 70 && lng >= 60 && lng <= 145)
        )
        if (ok) landDots.push([lat, lng])
      }
    }

    // North America
    for (let lat = 15; lat <= 70; lat += 3.5) {
      for (let lng = -170; lng <= -50; lng += 3.5) {
        const ok = (
          (lat >= 15 && lat <= 30 && lng >= -115 && lng <= -85) ||
          (lat >= 30 && lat <= 50 && lng >= -125 && lng <= -65) ||
          (lat >= 50 && lat <= 60 && lng >= -140 && lng <= -60) ||
          (lat >= 60 && lat <= 70 && lng >= -170 && lng <= -60)
        )
        if (ok) landDots.push([lat, lng])
      }
    }

    // South America
    for (let lat = -55; lat <= 12; lat += 3.5) {
      for (let lng = -80; lng <= -34; lng += 3.5) {
        const ok = (
          (lat >= -55 && lat <= -40 && lng >= -75 && lng <= -62) ||
          (lat >= -40 && lat <= -20 && lng >= -72 && lng <= -40) ||
          (lat >= -20 && lat <= 0  && lng >= -80 && lng <= -34) ||
          (lat >= 0   && lat <= 12 && lng >= -78 && lng <= -58)
        )
        if (ok) landDots.push([lat, lng])
      }
    }

    // Australia
    for (let lat = -40; lat <= -10; lat += 3.5) {
      for (let lng = 113; lng <= 154; lng += 3.5) {
        const ok = (
          (lat >= -40 && lat <= -30 && lng >= 116 && lng <= 150) ||
          (lat >= -30 && lat <= -20 && lng >= 113 && lng <= 154) ||
          (lat >= -20 && lat <= -10 && lng >= 122 && lng <= 145)
        )
        if (ok) landDots.push([lat, lng])
      }
    }

    function draw() {
      c.clearRect(0, 0, S, S)
      const rot = rotRef.current

      // Outer glow
      const glow = c.createRadialGradient(cx, cy, R * 0.8, cx, cy, R * 1.5)
      glow.addColorStop(0, 'rgba(41,63,148,0.1)')
      glow.addColorStop(1, 'transparent')
      c.beginPath()
      c.arc(cx, cy, R * 1.5, 0, Math.PI * 2)
      c.fillStyle = glow
      c.fill()

      // Globe base — light blue-white ocean
      const ocean = c.createRadialGradient(cx - R * 0.25, cy - R * 0.25, R * 0.05, cx, cy, R)
      ocean.addColorStop(0, '#e8eef8')
      ocean.addColorStop(0.5, '#d4ddf0')
      ocean.addColorStop(1, '#c2cfe8')
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.fillStyle = ocean
      c.fill()

      // Latitude grid lines
      for (let lat = -60; lat <= 60; lat += 30) {
        const phi = (lat * Math.PI) / 180
        const ry = R * Math.cos(phi)
        const yp = cy - R * Math.sin(phi)
        if (ry < 1) continue
        c.beginPath()
        c.ellipse(cx, yp, ry, ry * 0.12, 0, 0, Math.PI * 2)
        c.strokeStyle = 'rgba(41,63,148,0.12)'
        c.lineWidth = 0.6
        c.stroke()
      }

      // Longitude grid lines
      for (let i = 0; i < 12; i++) {
        const lng = (360 / 12) * i
        c.beginPath()
        let started = false
        for (let lat = -88; lat <= 88; lat += 3) {
          const { x, y, z } = project(lat, lng, rot)
          if (z < -0.05) { started = false; continue }
          if (!started) { c.moveTo(x, y); started = true }
          else c.lineTo(x, y)
        }
        c.strokeStyle = 'rgba(41,63,148,0.12)'
        c.lineWidth = 0.6
        c.stroke()
      }

      // Land dots
      landDots.forEach(([lat, lng]) => {
        const { x, y, z } = project(lat, lng, rot)
        if (z < 0.04) return

        const brightness = 0.5 + z * 0.5
        const size = 2.5 + z * 1.5

        // Soft glow behind dot
        const dg = c.createRadialGradient(x, y, 0, x, y, size * 3)
        dg.addColorStop(0, `rgba(41,63,148,${brightness * 0.2})`)
        dg.addColorStop(1, 'transparent')
        c.beginPath()
        c.arc(x, y, size * 3, 0, Math.PI * 2)
        c.fillStyle = dg
        c.fill()

        // Dot
        c.beginPath()
        c.arc(x, y, size, 0, Math.PI * 2)
        c.fillStyle = `rgba(41,63,148,${brightness})`
        c.fill()
      })

      // South Africa pulse dot
      const sa = project(-29, 25, rot)
      if (sa.z > 0.1) {
        for (let r = 1; r <= 3; r++) {
          c.beginPath()
          c.arc(sa.x, sa.y, r * 9, 0, Math.PI * 2)
          c.strokeStyle = `rgba(41,63,148,${0.35 / r})`
          c.lineWidth = 1
          c.stroke()
        }
        c.beginPath()
        c.arc(sa.x, sa.y, 5, 0, Math.PI * 2)
        c.fillStyle = '#293F94'
        c.fill()
        c.beginPath()
        c.arc(sa.x, sa.y, 2.5, 0, Math.PI * 2)
        c.fillStyle = '#ffffff'
        c.fill()
      }

      // Night side shadow
      c.save()
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.clip()
      const night = c.createLinearGradient(cx - R, cy, cx + R, cy)
      night.addColorStop(0, 'rgba(12,28,56,0.18)')
      night.addColorStop(0.4, 'transparent')
      night.addColorStop(0.6, 'transparent')
      night.addColorStop(1, 'rgba(12,28,56,0.22)')
      c.fillStyle = night
      c.fillRect(cx - R, cy - R, R * 2, R * 2)
      c.restore()

      // Specular
      const spec = c.createRadialGradient(
        cx - R * 0.32, cy - R * 0.35, 0,
        cx - R * 0.32, cy - R * 0.35, R * 0.5
      )
      spec.addColorStop(0, 'rgba(255,255,255,0.28)')
      spec.addColorStop(0.5, 'rgba(255,255,255,0.08)')
      spec.addColorStop(1, 'transparent')
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.fillStyle = spec
      c.fill()

      // Atmosphere rim
      const rim = c.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.08)
      rim.addColorStop(0, 'transparent')
      rim.addColorStop(1, 'rgba(41,63,148,0.22)')
      c.beginPath()
      c.arc(cx, cy, R * 1.08, 0, Math.PI * 2)
      c.fillStyle = rim
      c.fill()

      // Border
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.strokeStyle = 'rgba(41,63,148,0.3)'
      c.lineWidth = 1.5
      c.stroke()

      rotRef.current = (rotRef.current + 0.15) % 360
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div style={{
      width: '100%',
      maxWidth: 520,
      margin: '0 auto',
      filter: 'drop-shadow(0 0 40px rgba(41,63,148,0.25))',
    }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  )
}