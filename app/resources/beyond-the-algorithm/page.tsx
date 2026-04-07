import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Beyond the Algorithm: Three Lessons for Business Leaders in the Age of AI | AlgoViva',
  description: 'Leadership in the age of AI demands slower thinking, systemic insight, and moral imagination.',
}

export default function BeyondTheAlgorithmPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Opinion · 2 November 2025</div>
          <h1>Beyond the Algorithm:<br /><em>Three Lessons for Business Leaders in the Age of AI</em></h1>
          <p className="page-hero-sub">Akanimo Akpan</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <p style={{ marginBottom: 24, fontSize: '20px', fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--navy)', borderLeft: '3px solid var(--brand)', paddingLeft: 24, lineHeight: 1.6 }}>
            Leadership in the age of AI is not only about adapting to rapid technological change. It is about recognising the deeper system in which people, processes, and technology continuously shape one another.
          </p>
          <p style={{ marginBottom: 24, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            At AlgoViva, we believe that leadership in the age of AI is not only about adapting to rapid technological change. It is about recognising the deeper system in which people, processes, and technology continuously shape one another.
          </p>
          <p style={{ marginBottom: 24, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            In this article, originally published in Acumen, Akanimo Akpan distils three profound lessons for leaders navigating the uncertainties of AI. Beyond the familiar debates about bias, privacy, and job displacement, he invites us to see the world as an interconnected system, one that demands slower thinking, systemic insight, and moral imagination.
          </p>
          <div style={{ background: 'rgba(41,63,148,0.05)', border: '1px solid rgba(41,63,148,0.15)', borderRadius: 4, padding: '24px 28px', marginBottom: 32 }}>
            <p style={{ fontSize: '15px', color: 'var(--navy)', fontWeight: 500, marginBottom: 16 }}>Three lessons for business leaders:</p>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>
              1. Everything is connected.<br />
              2. Complex problems require that we think and act slowly.<br />
              3. It is within our power to create the future we want.
            </p>
          </div>
          <p style={{ marginBottom: 40, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            These ideas challenge business and policy leaders alike to move beyond compliance and innovation for its own sake, toward shaping an AI-enabled future that reflects justice, care, and shared responsibility.
          </p>
          <div style={{ background: 'rgba(41,63,148,0.05)', border: '1px solid rgba(41,63,148,0.15)', borderRadius: 4, padding: '24px 28px', marginBottom: 40 }}>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
              Read the full article on Acumen:
            </p>
            <a href="https://acumenmagazine.co.za" target="_blank" rel="noopener noreferrer" style={{ fontSize: '15px', color: 'var(--brand)', textDecoration: 'none', borderBottom: '1px solid rgba(41,63,148,0.3)', paddingBottom: 2 }}>
              Three Lessons for Business Leaders in the Age of AI
            </a>
          </div>
          <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
            <div style={{ fontSize: '12px', color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Author</div>
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
