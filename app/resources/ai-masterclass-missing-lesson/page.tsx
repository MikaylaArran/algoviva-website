import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The AI Masterclass That Left Out the Most Important Lesson | AlgoViva',
  description: 'The AI masterclass I joined promised skills and quick success, but it left out something crucial: ethics. At AlgoViva, we aim to change that.',
}

export default function AIMasterclassPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Opinion · 9 November 2025</div>
          <h1>The AI Masterclass That Left Out<br /><em>the Most Important Lesson</em></h1>
          <p className="page-hero-sub">Franklyn Ugochukwu</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>

            <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', marginBottom: 40, background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 6, padding: 24 }}>
              <div style={{ position: 'relative', width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/franklyn-ugochukwu.jpg" alt="Franklyn Ugochukwu" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>Franklyn Ugochukwu</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>AlgoViva · AI Ethics researcher and practitioner</div>
                <div style={{ fontSize: 12, color: 'var(--light)', marginTop: 6 }}>9 November 2025</div>
              </div>
            </div>

            <p style={{ marginBottom: 24, fontSize: 20, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--navy)', borderLeft: '3px solid var(--brand)', paddingLeft: 24 }}>
              The AI masterclass I joined promised skills and quick success, but it left out something crucial: ethics. It focused on what AI can do, not what it should do. That gap is not just a flaw in training — it reflects a global problem.
            </p>

            <p style={{ marginBottom: 24 }}>
              I had a recent encounter with a friend I hadn&apos;t seen in a while, probably a couple of months. The last time we met, our conversation revolved around the challenges of finding work as a postgraduate student in sociology. He is a PhD candidate in sociology. Anyone who has walked this road knows the struggle. After all, how often do you see jobs advertised specifically for sociology majors? We brainstormed endlessly about possible opportunities, even far-fetched ones — can you imagine remote opportunities for a sociology postgraduate! But nothing concrete came of it, or at least that&apos;s what I thought.
            </p>

            <p style={{ marginBottom: 24 }}>
              Fast forward to a few days ago, we met again. This time, something about him was different. Not that anything had been wrong before, but something was just different — an energy I hadn&apos;t noticed the last time. After exchanging pleasantries, hastily and with a bit of excitement, he told me he had found an opportunity that he believes will greatly aid him in his job search.
            </p>

            <p style={{ marginBottom: 24 }}>
              &ldquo;What opportunity could possibly have changed everything for you?&rdquo; I asked.
            </p>

            <p style={{ marginBottom: 24 }}>
              &ldquo;Well, it&apos;s an AI masterclass,&rdquo; he replied.
            </p>

            <p style={{ marginBottom: 24 }}>
              I raised an eyebrow. He laughed, then launched into a passionate explanation about the endless opportunities in the AI industry — how he could position himself, leverage new skills, and build something tangible. The masterclass promised practical AI knowledge: how to create chatbots, set up AI automations, use AI for social media, streamline online businesses, and design digital products.
            </p>

            <p style={{ marginBottom: 24 }}>
              By the end of his explanation, I couldn&apos;t help but admire his enthusiasm. So I asked him to send me the link. A few days later, I found myself in the masterclass, virtually surrounded by many curious learners.
            </p>

            <p style={{ marginBottom: 24 }}>
              The first session was lively. The facilitator painted a sweeping picture of AI: its power, its promises, its place in the future. I remember him saying AI is the future and even opining that the synonym of the word &ldquo;future&rdquo; should be changed to &ldquo;artificial intelligence&rdquo; in the dictionary. Then he dove straight into practicalities: automation tools, AI-driven marketing, business hacks. The common denominator was clear — these skills could make you money. Who wouldn&apos;t be interested?
            </p>

            <p style={{ marginBottom: 24 }}>
              Yet, as the session wrapped up, I found myself unsettled. Something was missing.
            </p>

            <p style={{ marginBottom: 24 }}>
              As someone who has spent a fair amount of time studying the ethics of technology — particularly AI — I couldn&apos;t shake the sense that the course was offering power without a compass. The entire outline focused on what AI can do, but not what AI should do. There was no mention of fairness, no reflection on bias, no guidance on transparency, and no frameworks for building systems responsibly.
            </p>

            <p style={{ marginBottom: 24 }}>
              And that gap, I realised, is not just an oversight in a masterclass. It&apos;s a global problem.
            </p>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', margin: '40px 0 16px', lineHeight: 1.2 }}>
              Skills without ethics: a recipe for distrust
            </h2>

            <p style={{ marginBottom: 24 }}>
              Across industries, there&apos;s a growing obsession with AI skills. Learn to code an algorithm. Automate your workflow. Harness AI for efficiency. These are valuable tools — but tools alone are not enough. Imagine handing someone the keys to a powerful car without ever teaching them road safety. That&apos;s what &ldquo;AI without ethics&rdquo; looks like.
            </p>

            <p style={{ marginBottom: 24 }}>
              The consequences are already visible. AI hiring tools that unintentionally discriminate by gender. Loan approval systems that discriminate against historically disadvantaged communities. Healthcare algorithms that misdiagnose people of colour because the training data was not diverse.
            </p>

            <p style={{ marginBottom: 24 }}>
              What&apos;s missing isn&apos;t technical capacity — it&apos;s ethical capacity. Without embedding trust, fairness, and transparency into AI systems, we risk scaling up our biases and hardwiring inequality into the digital infrastructure of the future.
            </p>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', margin: '40px 0 16px', lineHeight: 1.2 }}>
              From masterclasses to mindsets
            </h2>

            <p style={{ marginBottom: 24 }}>
              That AI masterclass taught me something important — not about building chatbots or automations, but about the glaring absence of ethics in much of today&apos;s AI training. The future of AI won&apos;t be built on skills alone. It will be built on mindsets that value responsibility as much as innovation.
            </p>

            <div style={{ background: 'rgba(41,63,148,0.05)', border: '1px solid rgba(41,63,148,0.15)', borderRadius: 4, padding: '24px 28px', marginBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                This is exactly why I decided to join AlgoViva. Our mission is to ensure that organisations don&apos;t just adopt AI — they adopt it responsibly. Through impact assessments, fairness reviews, and governance frameworks, we help build systems that people can trust, that treat everyone fairly, and that shine with transparency.
              </p>
            </div>

            <p style={{ marginBottom: 24 }}>
              Because in the end, the real opportunity of AI isn&apos;t just about creating the next profitable automation. It&apos;s about shaping a future where technology empowers without exploiting, includes without excluding, and innovates without erasing accountability.
            </p>

            <p style={{ marginBottom: 24 }}>
              Whether you&apos;re a policymaker drafting regulations, a business leader adopting AI tools, or someone simply curious about the technology — the message is the same: demand more than skills. Demand trust. Demand fairness. Demand transparency.
            </p>

            <p style={{ marginBottom: 24 }}>
              AI is no longer a distant future. It&apos;s in our playlists, our classrooms, our hospitals, and our workplaces. The question is not whether we will use AI, but whether we will use it wisely. And that wisdom begins with ethics.
            </p>

            <p style={{ marginBottom: 40 }}>
              As for my AI masterclass, well, I will definitely keep attending. No acquired knowledge could ever be a waste, right? Especially given the prospect of making some extra cash — lol. Besides, the good thing for me is, I&apos;ve got AlgoViva. The question for you is: do you?
            </p>

            <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
              <div style={{ fontSize: 12, color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Author</div>
              <div style={{ fontSize: 15, color: 'var(--muted)' }}>Franklyn Ugochukwu</div>
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