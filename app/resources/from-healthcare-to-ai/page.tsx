import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'From Healthcare to Inclusive AI Innovation: Why I co-founded AlgoViva | AlgoViva',
  description: 'When I first heard about the launch of the world\'s first fully AI-powered hospital, I imagined what it could mean for Africa\'s healthcare challenges.',
}

export default function HealthcareToAIPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Personal essay · 9 November 2025</div>
          <h1>From Healthcare to Inclusive AI Innovation:<br /><em>Why I co-founded AlgoViva</em></h1>
          <p className="page-hero-sub">Nonhlanhla Akpan</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>

            <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', marginBottom: 40, background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 6, padding: 24 }}>
              <div style={{ position: 'relative', width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/nonhlanhla-akpan.jpg" alt="Nonhlanhla Akpan" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>Nonhlanhla Akpan</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>Co-founder, AlgoViva · Commercial strategy · Healthcare and inclusive AI</div>
                <div style={{ fontSize: 12, color: 'var(--light)', marginTop: 6 }}>9 November 2025</div>
              </div>
            </div>

            <p style={{ marginBottom: 24, fontSize: 20, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--navy)', borderLeft: '3px solid var(--brand)', paddingLeft: 24 }}>
              When I first heard about the launch of the world&apos;s first fully AI-powered hospital, I imagined what it could mean for Africa&apos;s healthcare challenges. The potential was inspiring, yet I soon realised that technology alone is not enough. Without representative data, strong governance, and ethical oversight, these innovations can deepen inequality rather than solve it.
            </p>

            <p style={{ marginBottom: 24 }}>
              When I first heard about the launch of the world&apos;s first fully AI-powered hospital in China, I thought, &ldquo;That&apos;s it, this could be the solution to Africa&apos;s shortage of healthcare professionals.&rdquo;
            </p>

            <p style={{ marginBottom: 24 }}>
              My attraction to this monumental AI innovation stems from the feeling that, while there are many things I&apos;m still figuring out in life, the one thing I know for certain is that I&apos;m called to be part of a movement that expands access to quality healthcare across the continent.
            </p>

            <p style={{ marginBottom: 24 }}>
              But then it dawned on me: as powerful as these AI systems are and as much as they promise to improve healthcare access, they are only as good as the data they are trained on and the systems and processes that govern it. And let&apos;s be honest — African data is vastly underrepresented in these systems and the systems that govern these emerging technologies are weak and in many cases non-existent. Most are trained on datasets from the global north, and that poses significant risks. These models may not perform effectively in our African context. In fact, they could unintentionally worsen healthcare outcomes for communities that are not adequately represented in the data.
            </p>

            <p style={{ marginBottom: 24 }}>
              So, when the AlgoViva idea was pitched to me by Akanimo, it was a no-brainer. AI is here to stay, and it will inevitably become an integral part of every step in healthcare and other industries. If I can play a role in ensuring that AI is deployed responsibly — from implementation to ongoing maintenance — and that it serves all people rather than marginalising some, then I would have honoured my true calling.
            </p>

            <div style={{ background: 'rgba(41,63,148,0.05)', border: '1px solid rgba(41,63,148,0.15)', borderRadius: 4, padding: '24px 28px', marginBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                At AlgoViva, we aim to ensure algorithmic systems and other emerging technologies are designed and deployed in the interest of people and the planet.
              </p>
            </div>

            <p style={{ marginBottom: 24 }}>
              Coming from a commercial background, I understand the importance of balancing purpose with performance. AlgoViva stands apart in its commitment to advancing technologies that are both ethically grounded and commercially sustainable — recognising that the organisations we work with, whether profit-driven or mission-led, must align ethical responsibility with real-world viability.
            </p>

            <p style={{ marginBottom: 24 }}>
              As we studied the Responsible AI market, we noticed a gap. Some organisations lean heavily on values and often take an activist stance, while others are purely commercial. We aim to strike a balance. We will partner with organisations that share our values: those committed to people and the care of the planet while also appreciating the realities of business.
            </p>

            <p style={{ marginBottom: 40 }}>
              My co-founder brings deep experience in systems change, complexity and AI ethics, and I bring strong commercial expertise. Together, we are building a model that integrates diverse expertise to navigate the complex, systemic challenges in the digital and AI landscape. We look forward to working with organisations to ensure that AI systems are deployed ethically, responsibly, inclusively and in ways that align with the organisation&apos;s commercial needs.
            </p>

            <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
              <div style={{ fontSize: 12, color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Author</div>
              <div style={{ fontSize: 15, color: 'var(--muted)' }}>Nonhlanhla Akpan</div>
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