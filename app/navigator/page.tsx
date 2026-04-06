import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Navigator',
  description: 'The only African AI governance benchmark. Know where you stand. Know what to do next.',
}

export default function NavigatorPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">AlgoViva Navigator</div>
          <h1>The only African AI<br /><em>governance benchmark.</em></h1>
          <p className="page-hero-sub">
            Navigator is our AI governance maturity assessment platform. Every engagement generates anonymised benchmark data, building the only African AI governance benchmark in existence. See where you stand. Know what to do next.
          </p>
        </div>
      </div>

      {/* WHAT IS NAVIGATOR */}
      <section style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="about-grid">
          <div>
            <div className="section-label">What is Navigator</div>
            <h2 className="section-title">AI governance maturity,<br />measured for Africa.</h2>
            <p className="section-body" style={{ marginBottom: 28 }}>
              Navigator scores your AI governance posture across four dimensions — accountability structures, explainability and redress, bias and fairness, and POPIA alignment — and benchmarks you against our growing African sector dataset. No global firm holds this data.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { title: 'Sector-specific benchmarks', body: 'Financial services, health, government, and civil society — each with its own standard, built from real African engagements.' },
                { title: 'Actionable priorities', body: 'Navigator does not just score you. It tells you what to fix first, in order of regulatory risk and governance impact.' },
                { title: 'Progress tracking', body: 'Run Navigator at the start of an engagement and again at review. Track your improvement over time with evidence your board can see.' },
                { title: 'Continuous data building', body: 'Every engagement adds to the benchmark. The more organisations participate, the more accurate and useful the standard becomes — for everyone.' },
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--teal)', fontSize: 16, flexShrink: 0, marginTop: 2 }}>◆</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)', marginBottom: 3 }}>{pt.title}</div>
                    <div style={{ fontSize: 13, lineHeight: 1.65, color: 'var(--muted)', fontWeight: 300 }}>{pt.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOCK SCREEN */}
          <div className="nav-screen">
            <div className="ns-header">
              <div className="ns-dot" style={{ background: '#ff5f57' }} />
              <div className="ns-dot" style={{ background: '#ffbd2e' }} />
              <div className="ns-dot" style={{ background: '#28c941' }} />
              <span className="ns-title-bar">AlgoViva Navigator · Financial Services</span>
            </div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Governance maturity score</div>
              <div className="ns-score">74</div>
              <div className="ns-score-label">/ 100 · SA Financial Services · Q2 2025</div>
            </div>
            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Score by dimension</div>
              {[
                { label: 'Accountability structures', score: 82, width: '82%', color: 'var(--teal)' },
                { label: 'Explainability and redress', score: 68, width: '68%', color: 'var(--teal)' },
                { label: 'Bias and fairness review', score: 71, width: '71%', color: '#C49A3C' },
                { label: 'POPIA alignment', score: 55, width: '55%', color: '#C05050' },
              ].map((d) => (
                <div key={d.label}>
                  <div className="ns-bar"><div className="ns-fill" style={{ width: d.width, background: d.color }} /></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.28)', marginBottom: 9 }}>
                    <span>{d.label}</span><span>{d.score}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="ns-row"><span className="ns-row-l">Sector benchmark</span><span className="ns-row-v" style={{ background: 'rgba(26,148,112,0.15)', color: 'var(--teal-m)' }}>Top quartile</span></div>
            <div className="ns-row"><span className="ns-row-l">Priority recommendation</span><span className="ns-row-v" style={{ background: 'rgba(192,80,80,0.15)', color: '#E08080' }}>POPIA audit</span></div>
            <div className="ns-row"><span className="ns-row-l">Context</span><span className="ns-row-v" style={{ color: 'rgba(255,255,255,0.3)' }}>African benchmark</span></div>
          </div>
        </div>
      </section>

      {/* DIMENSIONS */}
      <section style={{ background: 'var(--warm)' }}>
        <div className="section-label">What we measure</div>
        <h2 className="section-title">Four dimensions.<br />One African standard.</h2>
        <div className="auth-grid">
          {[
            { num: '01', label: 'Accountability structures', body: 'Decision rights, oversight bodies, escalation paths, and board-level AI governance. Who is responsible for what, and can they show it?' },
            { num: '02', label: 'Explainability & redress', body: 'Can your organisation explain AI decisions to affected individuals? Do people have a meaningful way to challenge those decisions?' },
            { num: '03', label: 'Bias & fairness', body: 'Are your AI systems systematically producing worse outcomes for particular groups? Have you looked? Could you show a regulator what you found?' },
            { num: '04', label: 'POPIA alignment', body: 'Do your automated decision-making systems meet South Africa\'s POPIA obligations? Most organisations cannot yet demonstrate that they do.' },
          ].map((d, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 40, fontWeight: 700, color: 'var(--teal)', lineHeight: 1, flexShrink: 0 }}>{d.num}</div>
              <div>
                <div className="auth-label">{d.label}</div>
                <div className="auth-body">{d.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="section-label" style={{ color: 'var(--teal-m)' }}>Get started</div>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Request Navigator access.</h2>
        <p className="section-body" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 480, marginBottom: 36 }}>
          Navigator is available as part of an AlgoViva engagement or as a standalone assessment. Tell us your sector and we will take it from there.
        </p>
        <Link href="/contact" className="btn-p">Request access</Link>
      </section>
    </>
  )
}
