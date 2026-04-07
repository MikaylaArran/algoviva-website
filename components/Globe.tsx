'use client'

import { useEffect, useRef } from 'react'

// Simplified but accurate continent outline coordinates [lat, lng]
const CONTINENTS: [number, number][][] = [
  // Africa
  [
    [37,10],[37,37],[30,42],[15,42],[11,44],[8,42],[4,35],[0,42],[-5,40],
    [-12,40],[-18,36],[-26,33],[-35,27],[-35,18],[-28,17],[-22,14],[-16,12],
    [-5,10],[3,7],[4,2],[5,-2],[3,-8],[4,-8],[5,-5],[6,-2],[5,1],
    [6,3],[5,7],[5,3],[6,2],[6,-1],[8,0],[10,-5],[14,-17],[18,-16],
    [22,-16],[26,-14],[30,-10],[32,-5],[37,10]
  ],
  // Europe
  [
    [36,-6],[36,28],[38,26],[38,34],[42,28],[44,34],[46,30],[48,22],
    [52,20],[54,18],[56,20],[58,22],[60,24],[62,26],[65,14],[68,16],
    [70,20],[70,28],[65,14],[62,5],[58,5],[55,8],[52,4],[50,2],
    [48,-2],[44,-2],[42,-2],[40,-8],[36,-6]
  ],
  // Asia
  [
    [38,26],[42,40],[45,50],[50,58],[55,68],[60,68],[65,72],[70,68],
    [72,72],[70,80],[68,80],[65,88],[60,100],[55,100],[52,100],[48,88],
    [44,78],[40,72],[36,72],[30,68],[24,68],[20,72],[16,74],[10,78],
    [8,78],[8,80],[10,80],[8,76],[6,80],[4,74],[2,104],[0,108],
    [-8,116],[-8,116],[-4,108],[0,108],[4,100],[8,98],[10,100],[14,100],
    [18,100],[22,114],[26,120],[30,122],[36,128],[40,124],[44,132],
    [48,136],[52,140],[56,138],[52,130],[48,128],[44,122],[40,130],
    [36,140],[32,130],[28,122],[24,118],[20,110],[18,108],[14,100],
    [10,104],[4,104],[2,110],[0,108],[4,100],[8,98],[10,100],[14,100],
    [18,96],[22,92],[26,88],[30,80],[34,72],[38,56],[40,52],[42,50],
    [38,44],[36,36],[38,34],[38,26]
  ],
  // North America
  [
    [70,-140],[70,-120],[68,-100],[65,-88],[62,-80],[58,-68],[52,-56],
    [48,-54],[44,-60],[40,-70],[36,-76],[32,-80],[28,-82],[24,-88],
    [20,-88],[16,-90],[14,-84],[10,-84],[8,-80],[10,-76],[14,-60],
    [16,-62],[20,-72],[24,-76],[28,-80],[32,-80],[36,-76],[40,-70],
    [44,-64],[48,-52],[52,-56],[56,-60],[60,-66],[64,-68],[68,-72],
    [70,-80],[72,-96],[70,-108],[68,-116],[65,-122],[60,-128],[55,-130],
    [50,-128],[45,-124],[40,-124],[36,-122],[32,-118],[28,-114],[24,-110],
    [20,-106],[20,-98],[24,-98],[28,-96],[32,-94],[36,-90],[40,-88],
    [44,-88],[48,-88],[52,-84],[56,-80],[60,-78],[64,-78],[68,-78],
    [70,-80],[70,-100],[68,-108],[65,-116],[62,-120],[60,-130],[56,-134],
    [52,-132],[48,-126],[44,-124],[40,-124],[36,-122],[32,-118],[28,-115],
    [24,-110],[20,-105],[16,-92],[14,-90],[12,-86],[10,-84],[8,-78],
    [8,-76],[10,-76],[14,-82],[18,-94],[20,-98],[24,-106],[28,-114],
    [32,-118],[36,-122],[40,-124],[44,-124],[48,-126],[52,-132],[56,-136],
    [60,-140],[64,-140],[68,-136],[70,-140]
  ],
  // South America
  [
    [10,-72],[8,-62],[4,-52],[0,-50],[-4,-36],[-8,-34],[-12,-38],
    [-16,-40],[-20,-42],[-24,-44],[-28,-50],[-32,-54],[-36,-58],
    [-40,-62],[-44,-66],[-48,-70],[-52,-72],[-56,-68],[-54,-64],
    [-50,-60],[-46,-56],[-42,-52],[-38,-48],[-34,-44],[-30,-40],
    [-26,-36],[-22,-42],[-18,-40],[-14,-38],[-10,-36],[-6,-36],
    [-2,-40],[2,-50],[6,-58],[8,-62],[10,-72]
  ],
  // Australia
  [
    [-14,130],[-14,136],[-16,140],[-20,144],[-24,146],[-28,148],
    [-32,150],[-36,148],[-38,144],[-36,138],[-34,134],[-32,128],
    [-28,122],[-24,118],[-20,116],[-16,118],[-14,124],[-12,128],
    [-14,130]
  ],
]

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const rotRef = useRef(25)

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

      // Globe ocean base
      const ocean = c.createRadialGradient(cx - R * 0.25, cy - R * 0.28, R * 0.05, cx, cy, R)
      ocean.addColorStop(0, '#e4ecf8')
      ocean.addColorStop(0.5, '#cfdaef')
      ocean.addColorStop(1, '#bccae6')
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.fillStyle = ocean
      c.fill()

      // Grid lines
      for (let lat = -60; lat <= 60; lat += 30) {
        const phi = (lat * Math.PI) / 180
        const ry = R * Math.cos(phi)
        const yp = cy - R * Math.sin(phi)
        if (ry < 1) continue
        c.beginPath()
        c.ellipse(cx, yp, ry, ry * 0.12, 0, 0, Math.PI * 2)
        c.strokeStyle = 'rgba(41,63,148,0.1)'
        c.lineWidth = 0.6
        c.stroke()
      }
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
        c.strokeStyle = 'rgba(41,63,148,0.1)'
        c.lineWidth = 0.6
        c.stroke()
      }

      // Clip to globe
      c.save()
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.clip()

      // Draw continents
      CONTINENTS.forEach((continent) => {
        // Check if continent is mostly visible
        let visibleCount = 0
        continent.forEach(([lat, lng]) => {
          const { z } = project(lat, lng, rot)
          if (z > 0) visibleCount++
        })
        if (visibleCount < 3) return

        c.beginPath()
        let started = false
        continent.forEach(([lat, lng]) => {
          const { x, y, z } = project(lat, lng, rot)
          if (z < -0.1) {
            started = false
            return
          }
          if (!started) {
            c.moveTo(x, y)
            started = true
          } else {
            c.lineTo(x, y)
          }
        })
        c.closePath()

        // Land gradient
        const grad = c.createLinearGradient(cx - R, cy - R, cx + R, cy + R)
        grad.addColorStop(0, 'rgba(41,63,148,0.75)')
        grad.addColorStop(0.5, 'rgba(41,63,148,0.6)')
        grad.addColorStop(1, 'rgba(30,50,120,0.7)')
        c.fillStyle = grad
        c.fill()
        c.strokeStyle = 'rgba(255,255,255,0.4)'
        c.lineWidth = 0.8
        c.stroke()
      })

      c.restore()

      // South Africa pulse dot
      const sa = project(-29, 25, rot)
      if (sa.z > 0.1) {
        for (let r = 1; r <= 3; r++) {
          c.beginPath()
          c.arc(sa.x, sa.y, r * 9, 0, Math.PI * 2)
          c.strokeStyle = `rgba(41,63,148,${0.4 / r})`
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

      // Night shadow
      c.save()
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.clip()
      const night = c.createLinearGradient(cx - R, cy, cx + R, cy)
      night.addColorStop(0, 'rgba(12,28,56,0.15)')
      night.addColorStop(0.35, 'transparent')
      night.addColorStop(0.65, 'transparent')
      night.addColorStop(1, 'rgba(12,28,56,0.2)')
      c.fillStyle = night
      c.fillRect(cx - R, cy - R, R * 2, R * 2)
      c.restore()

      // Specular highlight
      const spec = c.createRadialGradient(cx - R * 0.32, cy - R * 0.35, 0, cx - R * 0.32, cy - R * 0.35, R * 0.5)
      spec.addColorStop(0, 'rgba(255,255,255,0.3)')
      spec.addColorStop(0.5, 'rgba(255,255,255,0.08)')
      spec.addColorStop(1, 'transparent')
      c.beginPath()
      c.arc(cx, cy, R, 0, Math.PI * 2)
      c.fillStyle = spec
      c.fill()

      // Atmosphere rim
      const rim = c.createRadialGradient(cx, cy, R * 0.88, cx, cy, R * 1.08)
      rim.addColorStop(0, 'transparent')
      rim.addColorStop(1, 'rgba(41,63,148,0.2)')
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