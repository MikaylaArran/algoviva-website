import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Frameworks, policy briefs, case insights, and African Digital Rights updates from AlgoViva.',
}

const resources = [
  { tag: 'Policy analysis', title: "South Africa's Draft AI Policy: The Test Is in the Teeth", desc: "South Africa's draft AI policy marks an important step, but its success will depend on more than good intentions. The real test lies in whether it clearly defines AI and enforces accountability.", footer: 'Akanimo Akpan, Nonhlanhla Akpan, Mikayla Arran, Franklyn Ugochukwu · 7 April 2026', href: '/resources/sa-ai-policy' },
  { tag: 'Framework', title: 'AlgoViva AI Governance Principles', desc: 'Our public framework for responsible AI governance in African organisational contexts. Structured around people, processes, and technology. Updated annually.', footer: 'Working paper · 2025', href: '#' },
  { tag: 'Policy brief', title: 'POPIA and AI: What financial services institutions need to know', desc: 'A practical guide to POPIA obligations on automated decision-making for South African financial institutions. What the law requires and what good practice looks like.', footer: 'Insight · 2025', href: '#' },
  { tag: 'Digital Rights brief', title: 'African Digital Rights Monitor: Q2 2025', desc: 'Tracking AI harms, rights developments, and community impacts across South Africa, Kenya, and Nigeria. Published quarterly.', footer: 'Quarterly brief · Q2 2025', href: '#' },
  { tag: 'Methodology', title: 'AlgoViva Algorithmic Audit Methodology', desc: 'How we audit AI systems: the people, process, and technology dimensions we examine, and why purely technical audits miss what matters most.', footer: 'Working paper · 2025', href: '#' },
  { tag: 'Case insight', title: 'Bias in automated credit scoring: what we found', desc: 'An anonymised account of findings from an AI assurance engagement in the South African financial services sector. The patterns that recur and what they mean.', footer: 'Case insight · 2025', href: '#' },
  { tag: 'AlgoViva Kids', title: '2025 Impact Report: AlgoViva Kids', desc: 'What we learned from bringing AI literacy and ethics education into South African schools and community organisations. The next generation is not waiting.', footer: 'Annual report · 2025', href: '#' },
]

export default function ResourcesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Resources</div>
          <h1>Thinking publicly about<br /><em>AI governance.</em></h1>
          <p className="page-hero-sub">
            We publish what we learn. Frameworks, case insights, policy briefs, and African Digital Rights updates. Our thought leadership is part of how we build the field, not just our profile.
          </p>
        </div>
      </div>
      
      <section style={{ background: 'var(--warm)' }}>
        <div className="res-grid">
          {resources.map((r, i) => (
            <a href={r.href} className="res-card" key={i}>
              <div className="res-tag">◆ {r.tag}</div>
              <div className="res-title">{r.title}</div>
              <div className="res-desc">{r.desc}</div>
              <div className="res-footer">{r.footer}</div>
            </a>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--navy)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Stay updated</div>
        <h2 className="section-title" style={{ color: 'var(--white)' }}>New resources, as we publish them.</h2>
        <a href="/contact" className="btn-p">Get in touch</a>
      </section>
    </>
  )
}