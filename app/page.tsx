'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Globe from '@/components/Globe'

type Sector = 'financial' | 'health' | 'government' | 'civil'

const SECTORS: { id: Sector; label: string }[] = [
  { id: 'financial', label: 'Financial Services' },
  { id: 'health', label: 'Health' },
  { id: 'government', label: 'Government' },
  { id: 'civil', label: 'Civil Society' },
]

function JourneySVG({ id, labels }: { id: string; labels: string[][] }) {
  return (
    <svg className="journey-svg" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" id={id}>
      <circle cx="210" cy="210" r="130" stroke="rgba(143,217,192,0.15)" strokeWidth="1" strokeDasharray="4 6"/>
      <circle cx="210" cy="210" r="90" stroke="rgba(143,217,192,0.08)" strokeWidth="1"/>
      <path d="M210 80 A130 130 0 0 1 340 210" stroke="#1A9470" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M340 210 A130 130 0 0 1 210 340" stroke="rgba(26,148,112,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M210 340 A130 130 0 0 1 80 210" stroke="rgba(26,148,112,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M80 210 A130 130 0 0 1 210 80" stroke="rgba(26,148,112,0.35)" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <polygon points="340,200 348,210 340,220" fill="#1A9470" opacity="0.7"/>
      <circle cx="210" cy="80" r="28" fill="rgba(26,148,112,0.18)" stroke="#1A9470" strokeWidth="1.5"/>
      <circle cx="340" cy="210" r="28" fill="rgba(26,148,112,0.08)" stroke="rgba(26,148,112,0.35)" strokeWidth="1"/>
      <circle cx="210" cy="340" r="28" fill="rgba(26,148,112,0.08)" stroke="rgba(26,148,112,0.35)" strokeWidth="1"/>
      <circle cx="80" cy="210" r="28" fill="rgba(26,148,112,0.08)" stroke="rgba(26,148,112,0.35)" strokeWidth="1"/>
      <text x="210" y="74" textAnchor="middle" fill="#8FD9C0" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[0][0]}</text>
      <text x="210" y="85" textAnchor="middle" fill="#8FD9C0" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[0][1]}</text>
      <text x="340" y="205" textAnchor="middle" fill="rgba(143,217,192,0.55)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[1][0]}</text>
      <text x="340" y="216" textAnchor="middle" fill="rgba(143,217,192,0.55)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[1][1]}</text>
      <text x="210" y="334" textAnchor="middle" fill="rgba(143,217,192,0.55)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[2][0]}</text>
      <text x="210" y="345" textAnchor="middle" fill="rgba(143,217,192,0.55)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[2][1]}</text>
      <text x="80" y="205" textAnchor="middle" fill="rgba(143,217,192,0.55)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[3][0]}</text>
      <text x="80" y="216" textAnchor="middle" fill="rgba(143,217,192,0.55)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="600" letterSpacing="0.06em">{labels[3][1]}</text>
      <circle cx="210" cy="210" r="46" fill="rgba(26,148,112,0.1)" stroke="rgba(26,148,112,0.2)" strokeWidth="1"/>
      <text x="210" y="205" textAnchor="middle" fill="rgba(143,217,192,0.8)" fontSize="10" fontFamily="Cormorant Garamond,serif" fontStyle="italic">Your</text>
      <text x="210" y="220" textAnchor="middle" fill="rgba(143,217,192,0.8)" fontSize="10" fontFamily="Cormorant Garamond,serif" fontStyle="italic">journey</text>
    </svg>
  )
}

const sectorData = {
  financial: {
    tag: 'Financial Services',
    heading: <>Your AI is making<br /><em>decisions at scale.</em><br />Is it doing so fairly?</>,
    body: 'Automated credit scoring. Fraud detection. Customer risk profiling. These systems process millions of decisions affecting real people, often without adequate oversight, explainability, or accountability. POPIA and emerging AU AI frameworks are closing the window for complacency.',
    problems: [
      { label: 'The risk you carry', text: 'Credit and lending algorithms that reflect historical bias, denying access to creditworthy customers and exposing your organisation to regulatory challenge.' },
      { label: 'The compliance gap', text: 'POPIA obligations on automated decision-making are tightening. Most financial institutions cannot yet demonstrate that their AI systems meet the standard required.' },
      { label: 'The trust deficit', text: 'When customers cannot understand why a decision was made about them, trust erodes and regulators notice before you do.' },
    ],
    journeyTitle: 'From AI risk exposure to a governance posture you can stand behind',
    journeySubtitle: 'You can enter this process at any point. The circle never closes because responsible AI is an ongoing practice, not a project.',
    svgLabels: [['AUDIT', '&'], ['GOV.', 'FRMWK'], ['NAVIG', 'ATOR'], ['ONGO', 'ING']],
    cards: [
      { title: 'Algorithmic audit', body: 'We assess your AI systems across people, processes, and technology, not just the model. You receive findings your board can act on and your risk committee can file with confidence.' },
      { title: 'Governance framework', body: 'We build the decision-rights, oversight structures, and accountability mechanisms that turn responsible AI from a principle into a daily practice.' },
      { title: 'Navigator benchmarking', body: 'We benchmark your AI governance maturity against the AlgoViva African financial services standard, the only context-specific benchmark of its kind on the continent.' },
      { title: 'Ongoing advisory', body: 'As regulations evolve and your AI systems change, we stay with you: reviewing, advising, and keeping your governance current. This is a partnership, not a project.' },
    ],
  },
  health: {
    tag: 'Health',
    heading: <>AI in healthcare<br />must <em>protect</em> the<br />most vulnerable.</>,
    body: 'Predictive triage. Diagnostic support. Patient risk stratification. In under-resourced health systems, AI is being deployed faster than the safeguards to govern it. The stakes, including patient safety, clinical trust, and equitable access, could not be higher.',
    problems: [
      { label: 'The clinical risk', text: 'AI diagnostic tools trained on non-representative data produce worse outcomes for the patients most dependent on public health systems.' },
      { label: 'The accountability gap', text: 'When an AI recommendation contributes to a clinical outcome, who is responsible? Most health organisations do not yet have a clear answer.' },
      { label: 'The consent challenge', text: 'Patients have a right to understand how their data is used and how decisions about their care are made. Few health AI systems currently support this meaningfully.' },
    ],
    journeyTitle: 'From AI deployment risk to clinically trustworthy systems',
    journeySubtitle: 'Entry at any point. The work is continuous because clinical AI evolves continuously.',
    svgLabels: [['CLINICAL', 'AUDIT'], ['ETHICS', 'FRMWK'], ['PATIENT', 'RIGHTS'], ['ONGO', 'ING']],
    cards: [
      { title: 'Clinical AI audit', body: 'We assess diagnostic and decision-support tools for bias, data quality, and clinical safety across the people using them, the processes governing them, and the technology itself.' },
      { title: 'Ethics and accountability framework', body: 'We build the governance structures that define clinical AI accountability: who decides, who reviews, and how patients are protected when things go wrong.' },
      { title: 'Patient rights design', body: 'We design consent and explainability processes that give patients genuine agency, not compliance checkbox exercises. Informed consent that actually informs.' },
      { title: 'Ongoing partnership', body: 'As clinical AI evolves, we stay with your teams: reviewing new tools, advising on procurement, and updating governance as standards develop.' },
    ],
  },
  government: {
    tag: 'Government',
    heading: <>Public AI must be<br /><em>publicly</em> accountable.</>,
    body: 'Social grant eligibility. Policing risk scores. Benefits allocation. Government AI affects citizens who have no choice but to interact with these systems, and who carry the greatest costs when they fail. Democratic accountability for AI is not optional.',
    problems: [
      { label: 'The accountability deficit', text: 'When a government AI system makes a decision that affects a citizen, the path from algorithm to accountability is rarely clear. It must be.' },
      { label: 'The procurement gap', text: 'Public institutions are buying AI systems without the internal capacity to assess them. Vendors are shaping the agenda that government should be setting.' },
      { label: 'The rights exposure', text: 'Government AI systems touching social grants, policing, or access to services carry constitutional rights implications. Most have not been assessed for these risks.' },
    ],
    journeyTitle: 'From procurement risk to accountable public AI',
    journeySubtitle: 'Democratic accountability for AI requires ongoing oversight, not a once-off review.',
    svgLabels: [['ASSESS', 'MENT'], ['GOV.', 'POLICY'], ['CITIZEN', 'RIGHTS'], ['ONGO', 'ING']],
    cards: [
      { title: 'AI procurement assessment', body: 'We assess AI systems before or after procurement for bias, accountability gaps, and rights implications, giving public institutions the independent technical view they need.' },
      { title: 'AI governance policy', body: 'We help government departments build the internal policies and oversight structures that make responsible AI governance part of how public institutions operate.' },
      { title: 'Citizen rights design', body: 'We design redress, explainability, and participation mechanisms that give citizens real agency in how government AI affects their lives.' },
      { title: 'Ongoing oversight', body: 'Democratic accountability requires continuous oversight. We provide the ongoing advisory support that keeps public AI accountable as systems and contexts evolve.' },
    ],
  },
  civil: {
    tag: 'Civil Society',
    heading: <>Advocacy needs<br /><em>evidence.</em><br />We provide it.</>,
    body: 'Civil society organisations are on the frontline of AI harm in Africa — documenting cases, supporting affected communities, and pushing for accountability. AlgoViva provides the technical depth and African context that civil society advocacy requires to be credible and effective.',
    problems: [
      { label: 'The evidence gap', text: 'Documenting AI harm requires technical expertise most civil society organisations do not hold internally. Without evidence, advocacy remains anecdotal.' },
      { label: 'The engagement barrier', text: 'Participating meaningfully in AI policy processes requires technical literacy that most civil society actors are still building. Vendors and governments set the terms.' },
      { label: 'The community disconnect', text: 'AI governance debates happen at a remove from the communities most affected. Authentic community voice requires structured mechanisms, not just consultation.' },
    ],
    journeyTitle: 'From documentation to structural AI accountability',
    journeySubtitle: 'Durable change requires building the field, not just fighting fires. We are in it for the long term.',
    svgLabels: [['EVID', 'ENCE'], ['POLICY', 'ENGAGE'], ['COMM.', 'VOICE'], ['ONGO', 'ING']],
    cards: [
      { title: 'AI harm documentation', body: 'We provide the technical assessment capability that transforms community harm reports into evidenced, credible documentation that can drive accountability.' },
      { title: 'Policy engagement support', body: 'We support civil society organisations to participate meaningfully in AI policy processes: building technical literacy, shaping submissions, and engaging regulators.' },
      { title: 'Community voice design', body: 'We design participation and consultation mechanisms that give affected communities genuine influence over AI governance decisions, not performative inclusion.' },
      { title: 'Ongoing field building', body: 'We share knowledge, co-publish, and build capacity across the civil society ecosystem. The goal is a field that can sustain AI accountability without depending on us.' },
    ],
  },
}

export default function Home() {
  const [activeSector, setActiveSector] = useState<Sector>('financial')
  const [activeCards, setActiveCards] = useState<Record<Sector, number>>({
    financial: 0, health: 0, government: 0, civil: 0,
  })
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  const sector = sectorData[activeSector]

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
              AlgoViva helps organisations in financial services, health, government, and civil society build AI systems that are trustworthy, accountable, and genuinely fit for the African context. We bring the expertise. We carry the values. We have skin in the game.
            </p>
            <div className="hero-actions">
              <a href="#sectors" className="btn-p">Find your sector</a>
              <a href="#about" className="btn-g">Who we are</a>
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

      {/* SECTOR NAV */}
      <div className="sector-nav">
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

      {/* SECTOR PANELS */}
      <div id="sectors">
        {SECTORS.map((s) => {
          const d = sectorData[s.id]
          const activeIdx = activeCards[s.id]
          return (
            <div
              key={s.id}
              className={`sector-panel${activeSector === s.id ? ' active' : ''}`}
              id={`sector-${s.id}`}
              data-sector={s.id}
            >
              <div className="sh">
                <div>
                  <div className="sector-tag">{d.tag}</div>
                  <h2>{d.heading}</h2>
                  <p>{d.body}</p>
                  <a href="#cta" className="sec-cta">Start the conversation →</a>
                </div>
                <div className="prob-cards">
                  {d.problems.map((p, i) => (
                    <div className="prob-card" key={i}>
                      <div className="prob-label">{p.label}</div>
                      <div className="prob-text">{p.text}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="journey-section">
                <div className="journey-top">
                  <div className="journey-label-w">Your journey with AlgoViva</div>
                  <div className="journey-title">{d.journeyTitle}</div>
                  <div className="journey-sub">{d.journeySubtitle}</div>
                </div>
                <div className="journey-layout">
                  <div className="journey-circle-wrap">
                    <JourneySVG id={`j-svg-${s.id}`} labels={d.svgLabels} />
                  </div>
                  <div className="journey-cards">
                    {d.cards.map((card, i) => (
                      <div
                        key={i}
                        className={`jcard${activeIdx === i ? ' active' : ''}`}
                        onClick={() => setActiveCards((prev) => ({ ...prev, [s.id]: i }))}
                      >
                        <div className="jcard-top">
                          <div className="jcard-dot" />
                          <div className="jcard-title">{card.title}</div>
                        </div>
                        <div className="jcard-body">{card.body}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* SERVICES */}
      <section id="services">
        <div ref={addReveal} className="reveal">
          <div className="section-label">What we do</div>
          <h2 className="section-title">Three practices.<br />One purpose.</h2>
          <p className="section-body" style={{ maxWidth: 520 }}>
            Every service AlgoViva offers is grounded in a single conviction: AI governance in Africa must be built by people who understand Africa, from the inside out.
          </p>
        </div>
        <div className="svc-grid" style={{ marginTop: 52 }}>
          {[
            { icon: '◈', title: 'AI Assurance', desc: 'Independent algorithmic audits that assess your AI systems across people, processes, and technology. Not just the model — the whole system. Our reports are board-ready, regulator-defensible, and actually actionable.' },
            { icon: '◉', title: 'AI Governance', desc: 'We help organisations build the frameworks, structures, and cultures that make responsible AI a practice rather than a policy. From governance design to board-level advisory, we build the institutional capability that lasts.' },
            { icon: '◎', title: 'Digital Rights', desc: 'We help organisations understand and meet their obligations to the people their AI affects — from POPIA compliance to community participation design. Rights are not a constraint on innovation. They are the condition for trust.' },
            { icon: '◆', title: 'Navigator', desc: 'Our proprietary assessment platform benchmarks your AI governance maturity against the only African sector standard in existence. Know where you stand. Know what to do next. Track your progress over time.' },
            { icon: '◇', title: 'AlgoViva Kids', desc: 'Ethical AI starts with the next generation. We bring AI literacy, rights education, and ethical thinking into schools and community organisations across South Africa. It is our perspective made tangible.' },
            { icon: '○', title: 'Advisory', desc: 'Retained advisory support for boards, executive teams, and risk committees navigating AI governance in a rapidly evolving regulatory landscape. We are the independent voice your leadership needs on AI.' },
          ].map((svc, i) => (
            <div className="svc-card" key={i}>
              <div className="svc-icon">{svc.icon}</div>
              <div className="svc-title">{svc.title}</div>
              <div className="svc-desc">{svc.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div ref={addReveal} className="reveal">
          <div className="section-label">About AlgoViva</div>
          <h2 className="section-title">We are not neutral.<br />We are not supposed to be.</h2>
        </div>
        <div className="about-grid" style={{ marginTop: 44 }}>
          <div>
            <div ref={addReveal} className="reveal">
              <p className="about-intro">
                AlgoViva is an African AI governance consultancy. We help organisations in financial services, health, government, and civil society build AI systems that are trustworthy, accountable, and fit for the African context. We are headquartered in Johannesburg and work across the continent.
              </p>
              <div className="about-identity">
                <div className="about-identity-label">Our identity</div>
                <div className="about-identity-text">Black African-owned and led. This is not incidental to our work. It is why we exist, and why we do this work differently.</div>
              </div>
            </div>
            <div ref={addReveal} className="reveal about-values" style={{ transitionDelay: '0.1s' }}>
              {[
                { num: '01', title: 'African context, first', body: 'Global AI governance frameworks were not designed for African realities. We start from POPIA, Ubuntu ethics, informal data practices, and the specific power dynamics of African markets.' },
                { num: '02', title: 'People over processes', body: 'AI governance is not a documentation exercise. It is about the real decisions that affect real people. We keep that at the centre of everything we design.' },
                { num: '03', title: 'Capability, not dependence', body: 'Every engagement is designed to leave our clients more capable, not more reliant on us. Building African institutional capability is the outcome we are working toward.' },
              ].map((v) => (
                <div className="aval" key={v.num}>
                  <div className="aval-num">{v.num}</div>
                  <div>
                    <div className="aval-title">{v.title}</div>
                    <div className="aval-body">{v.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div ref={addReveal} className="reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="about-team-label">Who we are</div>
            <div className="about-bio">
              <div className="about-bio-name">The AlgoViva Team</div>
              <div className="about-bio-role">Johannesburg, South Africa</div>
              <div className="about-bio-text">We are a small, focused team of AI governance specialists, policy thinkers, technical assessors, and community advocates. What we share is a conviction that AI in Africa must be built differently, and that the people best placed to ensure that are Africans.</div>
            </div>
            <div className="about-bio">
              <div className="about-bio-name">Our Fellows Network</div>
              <div className="about-bio-role">Across Africa</div>
              <div className="about-bio-text">We work with a network of senior Fellows: retired regulators, academic researchers, civil society leaders, and technical AI specialists who contribute to specific engagements.</div>
            </div>
            <div className="about-mission">
              <div className="about-mission-label">Our purpose</div>
              <div className="about-mission-q">&ldquo;For the life of people and planet.&rdquo;</div>
              <div className="about-mission-cite">This is not a tagline. It is the test we apply to every engagement we take, every framework we design, and every client we choose to work with.</div>
            </div>
          </div>
        </div>
      </section>

      {/* AFRICAN-OWNED */}
      <section id="african-owned">
        <div ref={addReveal} className="reveal">
          <div className="section-label">Why it matters</div>
          <h2 className="section-title">African-owned.<br />African-rooted.<br />African-accountable.</h2>
          <p className="section-body">The AI governance field in Africa has been shaped largely by institutions and frameworks imported from elsewhere. AlgoViva was founded on the belief that durable, contextually grounded AI governance for Africa must be built by Africans, for African conditions, with African accountability.</p>
          <div className="ao-points">
            {[
              { title: 'We see what others miss', body: 'Global AI governance frameworks were designed for European and North American contexts. They do not account for POPIA, Ubuntu ethics, informal data practices, low-resource language bias, or the specific power asymmetries of African labour and credit markets. We do.' },
              { title: 'We carry shared stakes', body: 'When AI systems in South Africa produce discriminatory credit decisions or biased policing tools, they affect our families and our communities. We are not dispassionate advisors. We have skin in the game.' },
              { title: 'We build institutions, not dependence', body: 'Every engagement we undertake is designed to leave our clients more capable, not more reliant. African institutions governing AI well is the outcome we are working toward.' },
            ].map((pt, i) => (
              <div className="ao-point" key={i}>
                <div className="ao-icon">◆</div>
                <div>
                  <div className="ao-point-title">{pt.title}</div>
                  <div className="ao-point-body">{pt.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div ref={addReveal} className="ao-right reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="ao-quote">&ldquo;The communities most affected by AI in Africa deserve AI governance built by people who understand those communities from the inside, not from a distance.&rdquo;</div>
          <div className="ao-quote-cite">AlgoViva — Johannesburg, South Africa</div>
          <div className="ao-divider" />
          <div className="ao-stat">
            {[
              { num: '4/4', label: 'IAPP 2026 AI Governance vendor categories. One of only a handful of firms globally with this breadth.' },
              { num: '3', label: 'Service areas: AI Assurance, AI Governance, Digital Rights. Each African-contextualised from the ground up.' },
              { num: '1st', label: 'African AI governance benchmark in development via Navigator. No global firm holds this data.' },
            ].map((st) => (
              <div className="ao-stat-item" key={st.num}>
                <div className="ao-stat-num">{st.num}</div>
                <div className="ao-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATOR */}
      <section id="navigator">
        <div ref={addReveal} className="reveal">
          <div className="section-label">AlgoViva Navigator</div>
          <h2 className="section-title">The only African AI<br />governance benchmark</h2>
          <p className="section-body" style={{ maxWidth: 480 }}>Navigator is our assessment platform. Every engagement generates anonymised benchmark data, building the only African AI governance benchmark in existence. See where you stand. Know what to do next.</p>
          <br /><br />
          <a href="#cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: 'var(--teal)', textDecoration: 'none', borderBottom: '1px solid rgba(26,148,112,0.35)', paddingBottom: 2 }}>
            Request Navigator access →
          </a>
        </div>
        <div ref={addReveal} className="nav-screen reveal" style={{ transitionDelay: '0.15s' }}>
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
            <div className="ns-bar"><div className="ns-fill" style={{ width: '82%' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.28)', marginBottom: 9 }}><span>Accountability structures</span><span>82</span></div>
            <div className="ns-bar"><div className="ns-fill" style={{ width: '68%' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.28)', marginBottom: 9 }}><span>Explainability and redress</span><span>68</span></div>
            <div className="ns-bar"><div className="ns-fill" style={{ width: '71%', background: '#C49A3C' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.28)', marginBottom: 9 }}><span>Bias and fairness review</span><span>71</span></div>
            <div className="ns-bar"><div className="ns-fill" style={{ width: '55%', background: '#C05050' }} /></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(255,255,255,0.28)' }}><span>POPIA alignment</span><span>55</span></div>
          </div>
          <div className="ns-row"><span className="ns-row-l">Sector benchmark</span><span className="ns-row-v" style={{ background: 'rgba(26,148,112,0.15)', color: 'var(--teal-m)' }}>Top quartile</span></div>
          <div className="ns-row"><span className="ns-row-l">Priority recommendation</span><span className="ns-row-v" style={{ background: 'rgba(192,80,80,0.15)', color: '#E08080' }}>POPIA audit</span></div>
          <div className="ns-row"><span className="ns-row-l">Context</span><span className="ns-row-v" style={{ color: 'rgba(255,255,255,0.3)' }}>African benchmark</span></div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section id="authority">
        <div ref={addReveal} className="reveal">
          <div className="section-label">Track record</div>
          <h2 className="section-title">Built for Africa.<br />Recognised globally.</h2>
          <p className="section-body" style={{ maxWidth: 520 }}>Our work is grounded in African contexts and validated by international standards.</p>
        </div>
        <div className="auth-grid">
          {[
            { num: <><span>4</span>/4</>, label: 'IAPP vendor categories', body: 'Named in all four categories of the IAPP 2026 AI Governance Vendor Report — one of only a handful of firms globally to achieve this.' },
            { num: <>1<span>st</span></>, label: 'African AI benchmark', body: 'Navigator is building the first and only African AI governance benchmark. No global firm holds this data.' },
            { num: <><span>3</span></>, label: 'Integrated service areas', body: 'Assurance. Governance. Digital Rights. Three practices that work together for African organisational contexts.' },
          ].map((a, i) => (
            <div key={i} ref={addReveal} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="auth-num">{a.num}</div>
              <div className="auth-label">{a.label}</div>
              <div className="auth-body">{a.body}</div>
            </div>
          ))}
        </div>
        <div className="iapp-block">
          <div className="iapp-text-area">
            <strong>IAPP 2026 AI Governance Vendor Report</strong>
            <p>AlgoViva has been named in all four vendor categories — the only African firm to do so.</p>
          </div>
          <div className="iapp-cats">
            {['AI Assurance & Auditing', 'AI Governance Frameworks', 'Digital Rights & Compliance', 'AI Risk Assessment'].map((cat) => (
              <div className="iapp-cat" key={cat}>{cat}</div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources">
        <div ref={addReveal} className="reveal">
          <div className="section-label">Resources</div>
          <h2 className="section-title">Thinking publicly<br />about AI governance</h2>
          <p className="section-body" style={{ maxWidth: 520 }}>We publish what we learn. Frameworks, case insights, policy briefs, and African Digital Rights updates.</p>
        </div>
        <div className="res-grid" ref={addReveal} style={{ transitionDelay: '0.1s' }}>
          {[
            { tag: 'Framework', title: 'AlgoViva AI Governance Principles', desc: 'Our public framework for responsible AI governance in African organisational contexts.', footer: '◆ Working paper · 2025' },
            { tag: 'Policy brief', title: 'POPIA and AI: What financial services institutions need to know', desc: 'A practical guide to POPIA obligations on automated decision-making for South African financial institutions.', footer: '◆ Insight · 2025' },
            { tag: 'Digital Rights brief', title: 'African Digital Rights Monitor: Q2 2025', desc: 'Tracking AI harms, rights developments, and community impacts across South Africa, Kenya, and Nigeria.', footer: '◆ Quarterly brief · Q2 2025' },
            { tag: 'Methodology', title: 'AlgoViva Algorithmic Audit Methodology', desc: 'How we audit AI systems and why purely technical audits miss what matters most.', footer: '◆ Working paper · 2025' },
            { tag: 'Case insight', title: 'Bias in automated credit scoring: what we found', desc: 'An anonymised account of findings from an AI assurance engagement in South African financial services.', footer: '◆ Case insight · 2025' },
            { tag: 'AlgoViva Kids', title: '2025 Impact Report: AlgoViva Kids', desc: 'What we learned from bringing AI literacy and ethics education into South African schools.', footer: '◆ Annual report · 2025' },
          ].map((r, i) => (
            <a href="#" className="res-card" key={i}>
              <div className="res-tag">{r.tag}</div>
              <div className="res-title">{r.title}</div>
              <div className="res-desc">{r.desc}</div>
              <div className="res-footer">{r.footer}</div>
            </a>
          ))}
        </div>
      </section>

      {/* KIDS */}
      <section id="kids">
        <div ref={addReveal} className="reveal">
          <div className="section-label">AlgoViva Kids</div>
          <h2 className="section-title">Ethical AI starts<br />with the next generation</h2>
          <p className="section-body">We believe the communities most affected by AI deserve agency in how it develops, and that starts with young people. AlgoViva Kids brings AI literacy, rights education, and ethical thinking into schools and community organisations across South Africa.</p>
        </div>
        <div ref={addReveal} className="kids-card reveal" style={{ transitionDelay: '0.15s' }}>
          <p>&ldquo;Ethical AI cannot be built by the few for the many. It must be shaped by the many, including those who will live with its consequences longest.&rdquo;</p>
          <cite>AlgoViva · Johannesburg, South Africa</cite>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div ref={addReveal} className="reveal">
          <div className="section-label">Work with us</div>
          <h2 className="section-title">Ready to take AI<br />governance seriously?</h2>
          <p className="section-body">Tell us where you are starting from and we will tell you how we can help.</p>
        </div>
        <div className="cta-cards" ref={addReveal} style={{ transitionDelay: '0.1s' }}>
          {[
            { label: 'Start with an audit', title: 'AI Assurance', body: 'Understand what your AI systems are actually doing, before a regulator or a journalist does it for you.' },
            { label: 'Build the framework', title: 'AI Governance', body: 'Put the structures in place that make responsible AI a practice, not a policy document on a shelf.' },
            { label: 'Protect your community', title: 'Digital Rights', body: 'Ensure the people AI affects most have a voice in how it is designed and governed.' },
            { label: 'Assess your readiness', title: 'Navigator', body: 'Benchmark your AI governance maturity against the only African sector standard that exists.' },
          ].map((c, i) => (
            <a href="#" className="cta-card" key={i}>
              <div className="cta-card-label">{c.label}</div>
              <div className="cta-card-title">{c.title}</div>
              <div className="cta-card-body">{c.body}</div>
            </a>
          ))}
        </div>
        <div ref={addReveal} className="cta-contact reveal" style={{ transitionDelay: '0.2s' }}>
          <p>Talk to us directly</p>
          <a href="mailto:hello@algoviva.com" className="cta-email">hello@algoviva.com</a>
          <p className="cta-loc">Johannesburg, South Africa · www.algoviva.com</p>
        </div>
      </section>
    </>
  )
}