import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI Assurance, AI Governance, Digital Rights, Navigator, AlgoViva Kids, and Advisory — three practices, one purpose.',
}

const services = [
  {
    icon: '◈',
    title: 'AI Assurance',
    tag: 'Audit & Assessment',
    intro: 'Independent algorithmic audits that assess your AI systems across people, processes, and technology. Not just the model — the whole system.',
    points: [
      'Algorithmic bias and fairness review',
      'Explainability and transparency assessment',
      'POPIA automated decision-making compliance',
      'People and process governance review',
      'Board-ready findings with actionable recommendations',
      'Regulator-defensible documentation',
    ],
    who: 'Financial services, health, government, and any organisation deploying AI that affects people.',
  },
  {
    icon: '◉',
    title: 'AI Governance',
    tag: 'Strategy & Frameworks',
    intro: 'We help organisations build the frameworks, structures, and cultures that make responsible AI a daily practice rather than a policy document on a shelf.',
    points: [
      'AI governance framework design',
      'Board and executive AI literacy programmes',
      'AI ethics policy development',
      'Governance structure and accountability mapping',
      'AI procurement and vendor assessment frameworks',
      'Ongoing retained advisory support',
    ],
    who: 'Organisations building or scaling AI programmes who need governance that keeps pace with the technology.',
  },
  {
    icon: '◎',
    title: 'Digital Rights',
    tag: 'Rights & Compliance',
    intro: 'We help organisations understand and meet their obligations to the people their AI affects — from POPIA compliance to community participation design.',
    points: [
      'Digital rights impact assessment',
      'POPIA AI compliance review',
      'Community participation and consultation design',
      'Consent and explainability process design',
      'Redress mechanism design',
      'Civil society engagement support',
    ],
    who: 'Any organisation whose AI systems affect communities, patients, customers, or citizens.',
  },
  {
    icon: '◆',
    title: 'Navigator',
    tag: 'Benchmarking Platform',
    intro: 'Our proprietary assessment platform benchmarks your AI governance maturity against the only African sector standard in existence.',
    points: [
      'AI governance maturity scoring',
      'African sector benchmarking',
      'Dimension-by-dimension gap analysis',
      'Priority action recommendations',
      'Progress tracking over time',
      'Board-ready reporting',
    ],
    who: 'Organisations that want to understand where they stand, what to do next, and how they compare.',
  },
  {
    icon: '◇',
    title: 'AlgoViva Kids',
    tag: 'Education & Community',
    intro: 'Ethical AI starts with the next generation. We bring AI literacy, rights education, and ethical thinking into schools and community organisations across South Africa.',
    points: [
      'AI literacy curriculum for schools',
      'Community AI rights education',
      'Teacher and facilitator training',
      'Youth AI ethics workshops',
      'Community organisation capacity building',
      'Annual impact reporting',
    ],
    who: 'Schools, community organisations, NGOs, and companies with community investment mandates.',
  },
  {
    icon: '○',
    title: 'Advisory',
    tag: 'Retained Support',
    intro: 'Retained advisory support for boards, executive teams, and risk committees navigating AI governance in a rapidly evolving regulatory landscape.',
    points: [
      'Board-level AI governance advisory',
      'Executive AI risk briefings',
      'Regulatory development monitoring',
      'Incident response advisory',
      'AI strategy sense-checking',
      'Flexible retainer arrangements',
    ],
    who: 'Leadership teams that need a trusted, independent voice on AI governance as the landscape evolves.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">What we do</div>
          <h1>Three practices.<br /><em>One purpose.</em></h1>
          <p className="page-hero-sub">
            Every service AlgoViva offers is grounded in a single conviction: AI governance in Africa must be built by people who understand Africa, from the inside out.
          </p>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginTop: 8 }}>
          {services.map((svc, i) => (
            <div key={i} style={{
              background: 'var(--white)', border: '1px solid var(--stone)',
              borderRadius: 4, padding: '40px 36px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div className="svc-icon" style={{ margin: 0, flexShrink: 0 }}>{svc.icon}</div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 4 }}>{svc.tag}</div>
                  <div className="svc-title" style={{ marginBottom: 0 }}>{svc.title}</div>
                </div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--muted)', fontWeight: 300 }}>{svc.intro}</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, listStyle: 'none', paddingLeft: 0 }}>
                {svc.points.map((pt, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, fontSize: 13, color: 'var(--ink)', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 2 }}>◆</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div style={{
                marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--stone)',
                fontSize: 12, color: 'var(--light)', fontStyle: 'italic',
              }}>
                <strong style={{ fontStyle: 'normal', color: 'var(--muted)', fontWeight: 500 }}>Who this is for: </strong>{svc.who}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <div className="section-label" style={{ color: 'var(--teal-m)' }}>How we work</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Every engagement starts<br />with a conversation.</h2>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.52)', marginBottom: 44 }}>
            We do not sell packages. We start by understanding your context — your sector, your systems, your regulatory environment, and your organisation's maturity. Then we design an engagement that fits. Most clients begin with an AI Assurance review or a Navigator assessment, and grow the relationship from there.
          </p>
          <Link href="/contact" className="btn-p">Start the conversation</Link>
        </div>
      </section>
    </>
  )
}
