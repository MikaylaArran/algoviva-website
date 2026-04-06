import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'AlgoViva is an African AI governance consultancy. Black African-owned and led. Headquartered in Johannesburg.',
}

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">About AlgoViva</div>
          <h1>We are not neutral.<br /><em>We are not supposed to be.</em></h1>
          <p className="page-hero-sub">
            AlgoViva is an African AI governance consultancy. We help organisations build AI systems that are trustworthy, accountable, and fit for the African context. Black African-owned and led. Headquartered in Johannesburg.
          </p>
        </div>
      </div>

      {/* IDENTITY */}
      <section style={{ background: 'var(--white)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="about-grid">
          <div>
            <div className="section-label">Who we are</div>
            <h2 className="section-title">Built differently,<br />on purpose.</h2>
            <p className="about-intro">
              AlgoViva exists because AI governance in Africa cannot be addressed by frameworks designed for other contexts, by people without skin in the game. We were founded on that conviction, and it shapes everything we do.
            </p>
            <div className="about-identity">
              <div className="about-identity-label">Our identity</div>
              <div className="about-identity-text">Black African-owned and led. This is not incidental to our work. It is why we exist, and why we do this work differently.</div>
            </div>
            <div className="about-values">
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
          <div>
            <div className="about-team-label">Our people</div>
            <div className="about-bio">
              <div className="about-bio-name">The AlgoViva Team</div>
              <div className="about-bio-role">Johannesburg, South Africa</div>
              <div className="about-bio-text">We are a small, focused team of AI governance specialists, policy thinkers, technical assessors, and community advocates. What we share is a conviction that AI in Africa must be built differently — and that the people best placed to ensure that are Africans. We bring together expertise in law, computer science, social science, and organisational design because responsible AI cannot be addressed by any one discipline alone.</div>
            </div>
            <div className="about-bio">
              <div className="about-bio-name">Our Fellows Network</div>
              <div className="about-bio-role">Across Africa</div>
              <div className="about-bio-text">We work with a network of senior Fellows: retired regulators, academic researchers, civil society leaders, and technical AI specialists who contribute to specific engagements. This means our clients get depth of expertise that goes beyond what any small team could hold internally.</div>
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
        <div>
          <div className="section-label">Why it matters</div>
          <h2 className="section-title">African-owned.<br />African-rooted.<br />African-accountable.</h2>
          <p className="section-body" style={{ marginBottom: 32 }}>
            The AI governance field in Africa has been shaped largely by institutions and frameworks imported from elsewhere. AlgoViva was founded on the belief that durable, contextually grounded AI governance for Africa must be built by Africans, for African conditions, with African accountability.
          </p>
          <div className="ao-points">
            {[
              { title: 'We see what others miss', body: 'Global AI governance frameworks were designed for European and North American contexts. They do not account for POPIA, Ubuntu ethics, informal data practices, low-resource language bias, or the specific power asymmetries of African labour and credit markets. We do.' },
              { title: 'We carry shared stakes', body: 'When AI systems in South Africa produce discriminatory credit decisions or biased policing tools, they affect our families and our communities. We are not dispassionate advisors. We have skin in the game, and our clients feel the difference that makes.' },
              { title: 'We build institutions, not dependence', body: 'Every engagement we undertake is designed to leave our clients more capable, not more reliant. African institutions governing AI well is the outcome we are working toward. Our success is measured by the capability we leave behind.' },
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
        <div className="ao-right">
          <div className="ao-quote">&ldquo;The communities most affected by AI in Africa deserve AI governance built by people who understand those communities from the inside, not from a distance.&rdquo;</div>
          <div className="ao-quote-cite">AlgoViva — Johannesburg, South Africa</div>
          <div className="ao-divider" />
          <div className="ao-stat">
            {[
              { num: '4/4', label: 'IAPP 2026 AI Governance vendor categories — one of only a handful of firms globally with this breadth.' },
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

      {/* CTA STRIP */}
      <section style={{ background: 'var(--cream)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-label">Work with us</div>
        <h2 className="section-title">Ready to start?</h2>
        <p className="section-body" style={{ maxWidth: 480, marginBottom: 32 }}>Every engagement begins with a conversation. Tell us where you are and we will tell you how we can help.</p>
        <a href="/contact" className="btn-p" style={{ display: 'inline-block' }}>Get in touch</a>
      </section>
    </>
  )
}
