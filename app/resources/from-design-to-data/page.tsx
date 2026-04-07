import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'From Design to Data | AlgoViva',
  description: 'I believe technology should not only mirror the world but help shape it for the better. At AlgoViva, I work to make AI a true creative partner that amplifies diverse voices.',
}

export default function FromDesignToDataPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Personal essay · 9 November 2025</div>
          <h1>From Design to Data</h1>
          <p className="page-hero-sub">Mikayla Arran</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>

            <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', marginBottom: 40, background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 6, padding: 24 }}>
              <div style={{ position: 'relative', width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/mikayla-arran.jpg" alt="Mikayla Arran" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>Mikayla Arran</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>Creative and Technology Director, AlgoViva · Data Science · Creative AI</div>
                <div style={{ fontSize: 12, color: 'var(--light)', marginTop: 6 }}>9 November 2025</div>
              </div>
            </div>

            <p style={{ marginBottom: 24, fontSize: 20, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--navy)', borderLeft: '3px solid var(--brand)', paddingLeft: 24 }}>
              I believe technology should not only mirror the world but help shape it for the better. At AlgoViva, I work to make AI a true creative partner that amplifies diverse voices and expands what is possible.
            </p>

            <p style={{ marginBottom: 24 }}>
              In my journey through the creative industry, I often found myself in a relentless search for representations that truly captured the full spectrum of human experience. The patterns I encountered were not just visuals — they were reflections of deeper systemic limitations, evidence of how our creative tools, including AI, often inherit biases embedded in the data they are built on.
            </p>

            <p style={{ marginBottom: 24 }}>
              This realisation made me think about how technology not only reflects the world we live in but also shapes it. And if it shapes it, then we have the responsibility to guide what it becomes. What began as frustration gradually evolved into purpose. I wanted to understand these systems from the inside out, which led me to begin studying towards a degree in Data Science. The deeper I went, the clearer it became that creativity and computation do not sit on opposite ends of a spectrum — they are two halves of the same process of making meaning.
            </p>

            <p style={{ marginBottom: 24 }}>
              When I heard about AlgoViva, it immediately resonated with me. It felt like finding a home for my version of this work. I immediately knew it was something I wanted to be part of. It represented an opportunity to reshape the creative and technological landscape I care about so deeply — and to contribute to a future where AI does not simply replicate what is familiar but expands the boundaries of what is possible.
            </p>

            <div style={{ background: 'rgba(41,63,148,0.05)', border: '1px solid rgba(41,63,148,0.15)', borderRadius: 4, padding: '24px 28px', marginBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                As Creative and Technology Director, I bring both creative insight and technical understanding to ensure AI becomes a genuine ally to the creative industry. My goal is to design systems that amplify every voice, every culture, and every story that has been left out of traditional datasets.
              </p>
            </div>

            <p style={{ marginBottom: 24 }}>
              I see a future where AI serves as a true creative collaborator — a tool that broadens imaginations, opens new perspectives, and empowers creators to tell stories that have never been told.
            </p>

            <p style={{ marginBottom: 40 }}>
              Through AlgoViva, I want to help shape that future — one where technology not only reflects the world as it is but helps us create the world as it could be.
            </p>

            <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
              <div style={{ fontSize: 12, color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Author</div>
              <div style={{ fontSize: 15, color: 'var(--muted)' }}>Mikayla Arran</div>
              <div style={{ fontSize: 13, color: 'var(--light)', marginTop: 4 }}>9 November 2025</div>
            </div>

            <div style={{ marginTop: 48 }}>
              <Link href="/resources" style={{ fontSize: 14, color: 'var(--brand)', textDecoration: 'none', borderBottom: '1px solid rgba(41,63,148,0.3)', paddingBottom: 2 }}>
                ← Back to Resources
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}