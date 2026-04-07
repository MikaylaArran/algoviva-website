import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Attending to the systems of people, processes, and technology | AlgoViva',
  description: 'Building ethical AI starts with understanding AI as a system of people, processes, and technology.',
}

export default function AttendingToSystemsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Systems thinking · 2 November 2025</div>
          <h1>
            Attending to the systems of<br />
            <em>people, processes, and technology</em>
          </h1>
          <p className="page-hero-sub">Akanimo Akpan</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>

          <p style={{
            marginBottom: 24,
            fontSize: '20px',
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            color: 'var(--navy)',
            borderLeft: '3px solid var(--brand)',
            paddingLeft: 24,
            lineHeight: 1.6,
          }}>
            Building ethical AI starts with understanding AI as a system of people, processes, and technology. This piece explores how systems thinking can guide responsible AI governance and lasting change.
          </p>

          <p style={{ marginBottom: 24, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            At AlgoViva, we believe that building ethical and resilient AI systems begins with viewing AI as an interconnected system of people, processes, and technology — rather than a single technical domain. The same principles that guide systems thinking in social transformation apply to how we govern algorithms and digital technologies.
          </p>

          <p style={{ marginBottom: 24, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            This article from Reos Partners, which was co-authored by Akanimo Akpan, introduces the &ldquo;FENCED&rdquo; approach to addressing complex challenges through systems thinking. It invites us to look beyond surface problems to the deeper structures shaping outcomes, and to act in ways that create lasting change rather than quick fixes.
          </p>

          <p style={{ marginBottom: 40, fontSize: '17px', lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>
            For those working at the intersection of technology, AI ethics, and AI governance, it is a timely reminder that responsible AI requires more than technical safeguards — it demands systemic insight and collective learning that appreciates complexity, interconnection, and unintended consequences.
          </p>

          <div style={{
            background: 'rgba(41,63,148,0.05)',
            border: '1px solid rgba(41,63,148,0.15)',
            borderRadius: 4,
            padding: '24px 28px',
            marginBottom: 40,
          }}>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: 16 }}>
              Read the full article on Reos Partners:
            </p>
            
              href="https://reospartners.com/blog/systems-thinking-practical-approaches"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '15px',
                color: 'var(--brand)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(41,63,148,0.3)',
                paddingBottom: 2,
              }}
            >
              Systems Thinking: Practical Approaches → reospartners.com ↗
            </a>
          </div>

          <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
            <div style={{
              fontSize: '12px',
              color: 'var(--light)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              marginBottom: 8,
            }}>
              Author
            </div>
            <div style={{ fontSize: '15px', color: 'var(--muted)' }}>Akanimo Akpan</div>
            <div style={{ fontSize: '13px', color: 'var(--light)', marginTop: 4 }}>2 November 2025</div>
          </div>

          <div style={{ marginTop: 48 }}>
            <Link
              href="/resources"
              style={{
                fontSize: '14px',
                color: 'var(--brand)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(41,63,148,0.3)',
                paddingBottom: 2,
              }}
            >
              ← Back to Resources
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}