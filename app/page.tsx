'use client'

import { useState } from 'react'
import Link from 'next/link'
import Globe from '@/components/Globe'

type Sector = 'financial' | 'health' | 'government' | 'civil'

const SECTORS: { id: Sector; label: string }[] = [
  { id: 'financial', label: 'Financial Services' },
  { id: 'health', label: 'Health' },
  { id: 'government', label: 'Government' },
  { id: 'civil', label: 'Civil Society' },
]

const sectorData = {
  financial: {
    tag: 'Financial Services',
    heading: <>Your AI is making<br /><em>decisions at scale.</em><br />Is it doing so fairly?</>,
    body: 'Automated credit scoring. Fraud detection. Customer risk profiling. These systems process millions of decisions affecting real people, often without adequate oversight or accountability.',
    cta: 'How we help financial services →',
  },
  health: {
    tag: 'Health',
    heading: <>AI in healthcare<br />must <em>protect</em> the<br />most vulnerable.</>,
    body: 'Predictive triage. Diagnostic support. Patient risk stratification. In under-resourced health systems, AI is being deployed faster than the safeguards to govern it.',
    cta: 'How we help health organisations →',
  },
  government: {
    tag: 'Government',
    heading: <>Public AI must be<br /><em>publicly</em> accountable.</>,
    body: 'Social grant eligibility. Policing risk scores. Benefits allocation. Government AI affects citizens who have no choice but to interact with these systems.',
    cta: 'How we help government →',
  },
  civil: {
    tag: 'Civil Society',
    heading: <>Advocacy needs<br /><em>evidence.</em><br />We provide it.</>,
    body: 'Civil society organisations are on the frontline of AI harm in Africa — documenting cases, supporting affected communities, and pushing for accountability.',
    cta: 'How we help civil society →',
  },
}

export default function Home() {
  const [activeSector, setActiveSector] = useState<Sector>('financial')
  const d = sectorData[activeSector]

  return (
    <>
      {/* HERO */}
      <section className="hero hero-split">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-split-inner">
          <div className="hero-text">
            <div className="african-badge">Black African-owned and led</div>
            <div className="hero-tag">Ethical AI · South Africa · Africa</div>
            <h1>AI that serves <em>people</em><br />and planet</h1>
            <p className="hero-sub">
              AlgoViva helps organisations in financial services, health, government, and civil society build AI systems that are trustworthy, accountable, and genuinely fit for the African context.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="btn-p">Our services</Link>
              <Link href="/about" className="btn-g">Who we are</Link>
            </div>
            <div className="hero-footer">
              <span className="hero-footer-label">Recognised by</span>
              <span className="iapp-pill">IAPP 2026 AI Governance Vendor Report · All four vendor categories</span>
            </div>
          </div>
          <div className="hero-globe-wrap">
            <Globe />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ background: 'var(--cream)', padding: 0 }}>
        {/* Sector tabs */}
        <div className="sector-nav" style={{ position: 'relative', top: 0 }}>
          <div className="sector-tabs">
            {SECTORS.map((s) => (
              <button
                key={s.id}
                className={`stab${activeSector === s.id ? ' active' : ''}`}
                onClick={() => setActiveSector(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sector content */}
        <div
          className="sector-panel active"
          data-sector={activeSector}
          style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,80px)' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
            <div>
              <div className="sector-tag">{d.tag}</div>
              <h2 className="section-title">{d.heading}</h2>
              <p className="section-body" style={{ fontSize: 15, marginBottom: 32 }}>{d.body}</p>
              <Link href="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: 13, fontWeight: 500, color: 'var(--brand)',
                textDecoration: 'none', borderBottom: '1px solid rgba(41,63,148,0.3)',
                paddingBottom: 2,
              }}>
                {d.cta}
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'AI Assurance', desc: 'Independent algorithmic audits across people, processes, and technology.' },
                { label: 'AI Governance', desc: 'Frameworks and structures that make responsible AI a daily practice.' },
                { label: 'Digital Rights', desc: 'Meeting your obligations to the people your AI affects.' },
              ].map((item) => (
                <div key={item.label} style={{
                  background: 'var(--white)', border: '1px solid var(--stone)',
                  borderLeft: '3px solid var(--brand)',
                  borderRadius: 'var(--r)', padding: '18px 22px',
                }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.55 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section style={{ background: 'var(--white)' }}>
        <div className="section-label">What we do</div>
        <h2 className="section-title">Three practices.<br />One purpose.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2, marginTop: 44, background: 'var(--stone)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
          {[
            { icon: '◈', title: 'AI Assurance', desc: 'Independent algorithmic audits that assess your AI systems across people, processes, and technology.' },
            { icon: '◉', title: 'AI Governance', desc: 'Frameworks and structures that make responsible AI a practice, not a policy document on a shelf.' },
            { icon: '◎', title: 'Digital Rights', desc: 'Understanding and meeting your obligations to the people your AI affects.' },
          ].map((svc) => (
            <div className="svc-card" key={svc.title}>
              <div className="svc-icon">{svc.icon}</div>
              <div className="svc-title">{svc.title}</div>
              <div className="svc-desc">{svc.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <Link href="/services" className="btn-p">See all services</Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--navy)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 44 }}>
          {[
            { num: '4/4', accent: true, label: 'IAPP 2026 vendor categories', body: 'Named across all four categories — one of only a handful of firms globally.' },
            { num: '1st', accent: false, label: 'African AI benchmark', body: 'Navigator is building the first African AI governance benchmark in existence.' },
            { num: '3', accent: true, label: 'Integrated service areas', body: 'Assurance. Governance. Digital Rights. Built for African organisational contexts.' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 56, fontWeight: 700, color: s.accent ? 'var(--brand-l)' : 'var(--white)', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--white)', marginBottom: 7 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300, lineHeight: 1.65 }}>{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cream)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="section-label">Work with us</div>
        <h2 className="section-title">Ready to take AI<br />governance seriously?</h2>
        <p className="section-body" style={{ maxWidth: 480, marginBottom: 36 }}>
          Every engagement begins with a conversation. Tell us where you are starting from and we will tell you how we can help.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/contact" className="btn-p">Talk to us</Link>
          <Link href="/navigator" className="btn-g">Try Navigator</Link>
        </div>
      </section>
    </>
  )
}