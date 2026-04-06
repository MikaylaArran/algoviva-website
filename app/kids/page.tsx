import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AlgoViva Kids',
  description: 'Bringing AI literacy, rights education, and ethical thinking into schools and communities across South Africa.',
}

export default function KidsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">AlgoViva Kids</div>
          <h1>Ethical AI starts with<br /><em>the next generation.</em></h1>
          <p className="page-hero-sub">
            We believe the communities most affected by AI deserve agency in how it develops — and that starts with young people. AlgoViva Kids brings AI literacy, rights education, and ethical thinking into schools and community organisations across South Africa.
          </p>
        </div>
      </div>

      {/* WHY */}
      <section id="kids" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', background: 'var(--teal)', padding: 'clamp(60px,8vw,112px) clamp(20px,5vw,80px)' }}>
        <div>
          <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}>Why we do this</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Not a programme.<br />A perspective made tangible.</h2>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '100%' }}>
            AlgoViva Kids is not a corporate social responsibility exercise. It is a direct expression of our conviction that durable, ethical AI in Africa cannot be built without the participation of Africans — including those who will live longest with its consequences.
          </p>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '100%', marginTop: 16 }}>
            The young people we work with are not beneficiaries. They are future voters, workers, patients, and citizens who will encounter AI systems in every dimension of their lives. Giving them the tools to understand, question, and shape those systems is not charity. It is necessity.
          </p>
        </div>
        <div className="kids-card">
          <p>&ldquo;Ethical AI cannot be built by the few for the many. It must be shaped by the many, including those who will live with its consequences longest.&rdquo;</p>
          <cite>AlgoViva · Johannesburg, South Africa</cite>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="section-label">What we do</div>
        <h2 className="section-title">AI literacy meets<br />rights education.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 48 }}>
          {[
            { icon: '◈', title: 'AI Literacy Curriculum', body: 'We bring age-appropriate AI literacy into school classrooms. Not coding — understanding. What AI is, how it works, and what it means for their lives.' },
            { icon: '◉', title: 'Rights Education', body: 'Young people have rights in the age of AI. We teach them what those rights are, in language that makes sense for their context.' },
            { icon: '◎', title: 'Ethics Workshops', body: 'Interactive workshops that give young people a framework for thinking about whether AI is fair, who it benefits, and who it leaves behind.' },
            { icon: '◆', title: 'Teacher Training', body: 'We train teachers and facilitators to bring AI ethics conversations into their classrooms and community settings without needing technical expertise.' },
            { icon: '◇', title: 'Community Organisations', body: 'Beyond schools, we work with youth organisations, libraries, and community centres — wherever young people gather and learn.' },
            { icon: '○', title: 'Annual Impact Reporting', body: 'We publish an annual impact report on AlgoViva Kids — what we did, who we reached, what we learned, and what needs to change.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'var(--white)', border: '1px solid var(--stone)',
              borderRadius: 4, padding: '32px 28px',
            }}>
              <div className="svc-icon">{item.icon}</div>
              <div className="svc-title">{item.title}</div>
              <div className="svc-desc">{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: 680 }}>
          <div className="section-label" style={{ color: 'var(--teal-m)' }}>2025 Impact</div>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>The next generation<br />is not waiting.</h2>
          <p className="section-body" style={{ color: 'rgba(255,255,255,0.52)', marginBottom: 44 }}>
            Our 2025 impact report is available. Read what we learned from bringing AI literacy and ethics education into South African schools and community organisations.
          </p>
          <Link href="/resources" className="btn-p">Read the impact report</Link>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section style={{ background: 'var(--warm)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-label">Get involved</div>
        <h2 className="section-title">Bring AlgoViva Kids<br />to your community.</h2>
        <p className="section-body" style={{ maxWidth: 520, marginBottom: 36 }}>
          We work with schools, community organisations, and companies with community investment mandates. If you want to bring AlgoViva Kids to your community or support our work, get in touch.
        </p>
        <Link href="/contact" className="btn-p">Get in touch</Link>
      </section>
    </>
  )
}
