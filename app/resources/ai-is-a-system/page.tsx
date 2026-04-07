import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The cost of forgetting that AI is a system operating within wider systems | AlgoViva',
  description: 'When we treat AI as just a tool instead of a system operating within wider systems, we focus on whether code runs and lose sight of whether it should run.',
}

export default function AIIsASystemPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Opinion · 21 February 2026</div>
          <h1>The cost of forgetting that AI is<br /><em>a system operating within wider systems</em></h1>
          <p className="page-hero-sub">Akanimo Akpan</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>

            <p style={{ marginBottom: 24, fontSize: 20, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--navy)', borderLeft: '3px solid var(--brand)', paddingLeft: 24 }}>
              AI should never replace your interns or juniors. If you don&apos;t train juniors today, you won&apos;t have anyone who can fix the AI&apos;s catastrophic errors in five years.
            </p>

            <p style={{ marginBottom: 24 }}>
              For nearly a decade, I&apos;ve worked in systems change: work that demands we anticipate not just the intended consequences of our interventions, but more importantly, the unintended ones. Watching the gap between AI&apos;s promise and its reality unfold gives me a familiar mix of déjà vu and unease. I&apos;ve seen this pattern before in other complex systems.
            </p>

            <p style={{ marginBottom: 16 }}>
              This video by Mackard on &ldquo;Why Replacing Developers with AI is Going Horribly Wrong&rdquo; reveals something troubling:
            </p>

            <ul style={{ marginBottom: 24, paddingLeft: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>95% of generative AI pilots in the enterprise sector delivered zero measurable return despite $40 billion invested</li>
              <li>45% of AI-generated code contains OWASP top-10 security vulnerabilities</li>
              <li>Seasoned engineers are 19% slower when using AI tools because they&apos;ve become &ldquo;AI babysitters&rdquo;</li>
              <li>AI-generated pull requests contain nearly double the issues of human-written code</li>
            </ul>

            <p style={{ marginBottom: 24 }}>
              These aren&apos;t teething problems. They&apos;re symptoms of a deeper misunderstanding.
            </p>

            <p style={{ marginBottom: 24 }}>
              When we treat AI as just a tool instead of a system operating within wider systems — our organisations, our markets, our society — we focus on whether code runs and lose sight of whether it should run, how it fits together, what trade-offs it makes, and why the system exists at all.
            </p>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', margin: '40px 0 16px', lineHeight: 1.2 }}>
              What happens when we forget the systemic dimension
            </h2>

            <p style={{ marginBottom: 24 }}>
              We take shortcuts that become too expensive in the long run. The video calls this technical debt — 61 billion work days needed to fix what we&apos;re building today. But the real debt is human: there is a serious deficit in the expertise we&apos;re not developing, the judgment we&apos;re not cultivating, the accountability we&apos;re not maintaining.
            </p>

            <p style={{ marginBottom: 24 }}>
              We stop investing in people. We let AI replace entry-level roles and hollow out the pipeline that makes expertise possible. We outsource learning to machines that can&apos;t actually learn in any meaningful sense. Then we wonder why we have no one who understands the systems we&apos;ve built.
            </p>

            <p style={{ marginBottom: 24 }}>
              Our products become indistinguishable. AI-generated code &ldquo;tends to be simpler, more repetitive, and dangerously less structurally diverse.&rdquo; So does AI-generated strategy. When everyone&apos;s using the same tools to generate the same patterns, we lose the diversity that makes systems resilient.
            </p>

            <p style={{ marginBottom: 24 }}>
              We downplay accountability, as if that makes responsibility disappear. It doesn&apos;t. When the anti-gravity AI deleted 2TB of production data in seconds, its apology was worthless. Responsibility doesn&apos;t vanish because we&apos;ve delegated decisions to machines. It just becomes harder to trace.
            </p>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', margin: '40px 0 16px', lineHeight: 1.2 }}>
              What we are actually learning
            </h2>

            <p style={{ marginBottom: 24 }}>
              The lesson here is not &ldquo;slow down AI&rdquo; or &ldquo;ban the tools.&rdquo; The lesson is to stop mistaking automation for intelligence. These are not the same thing. It seems to me that the future belongs to those who understand the difference.
            </p>

            <p style={{ marginBottom: 24 }}>
              There are no shortcuts to robust systems, just as there are no shortcuts to robust organisations. AI is powerful precisely because it is not accountable, not contextual, not moral. That&apos;s not a bug. It&apos;s the nature of the technology.
            </p>

            <p style={{ marginBottom: 24 }}>
              Which means the burden falls back on us: to pay attention to architecture decisions, governance choices, who gets trained, who gets excluded, and who carries the long-term risk when things break.
            </p>

            <p style={{ marginBottom: 40 }}>
              The companies winning in 2026 aren&apos;t the ones who replaced humans with AI. They&apos;re the ones who stopped chasing automated solutions and understood that intelligence without accountability or systems thinking simply delays the reckoning.
            </p>

            <div style={{ background: 'rgba(41,63,148,0.05)', border: '1px solid rgba(41,63,148,0.15)', borderRadius: 4, padding: '24px 28px', marginBottom: 40 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                AlgoViva exists to help you navigate these conundrums. Our work balances ethics with organisational imperatives across systems, strategy, and culture. We exist to ensure that AI and other emerging technologies serve people and the planet, and are adopted to optimise ROI.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
              <div style={{ fontSize: 12, color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Author</div>
              <div style={{ fontSize: 15, color: 'var(--muted)' }}>Akanimo Akpan</div>
              <div style={{ fontSize: 13, color: 'var(--light)', marginTop: 4 }}>21 February 2026</div>
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