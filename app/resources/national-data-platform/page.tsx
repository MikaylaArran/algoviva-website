import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Towards a national interoperable data platform: The social side of innovation | AlgoViva',
  description: 'We believe that ethical transformation requires more than advanced technology. It demands collaboration, dialogue, and shared purpose.',
}

export default function NationalDataPlatformPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Systems thinking · 2 November 2025</div>
          <h1>Towards a national interoperable data platform:<br /><em>The social side of innovation</em></h1>
          <p className="page-hero-sub">Akanimo Akpan</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>

          <p style={{ marginBottom: 24, fontSize: '20px', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--navy)', borderLeft: '3px solid var(--brand)', paddingLeft: 24, lineHeight: 1.6 }}>
            We believe that ethical transformation requires more than advanced technology. It demands collaboration, dialogue, and shared purpose. The PSET CLOUD initiative exemplifies this balance, showing that innovation reaches its full potential only when anchored in trust and collective engagement.
          </p>

          <p style={{ marginBottom: 24, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            At AlgoViva, we often remind partners that technology alone cannot solve systemic challenges — it must be complemented by intentional engagement among people and re-aligned processes. This balance between social collaboration and technological innovation lies at the heart of ethical, sustainable transformation.
          </p>

          <p style={{ marginBottom: 24, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            The story of the PSET CLOUD — a JET Education Services and merSETA initiative that Akanimo supported through Reos Partners — offers a compelling example of this principle in action. The project aims to reclaim data self-sovereignty through a national interoperable data platform. Its success has depended as much on social engagement as on technical design.
          </p>

          <p style={{ marginBottom: 40, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            Through processes of inquiry, convening, co-creation, and collective strategising, the initiative shows how inclusive dialogue and shared accountability can transform innovation from a technical achievement into a systemic capability. The lesson is clear: technologies only realise their full potential when they are embedded in relationships of trust, shared purpose, and collaboration.
          </p>

          <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
            <div style={{ fontSize: '12px', color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 8 }}>Author</div>
            <div style={{ fontSize: '15px', color: 'var(--muted)' }}>Akanimo Akpan</div>
            <div style={{ fontSize: '13px', color: 'var(--light)', marginTop: 4 }}>2 November 2025</div>
          </div>

          <div style={{ marginTop: 48 }}>
            <Link href="/resources" style={{ fontSize: '14px', color: 'var(--brand)', textDecoration: 'none', borderBottom: '1px solid rgba(41,63,148,0.3)', paddingBottom: 2 }}>
              Back to Resources
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}