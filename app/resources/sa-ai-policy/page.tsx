import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "South Africa's Draft AI Policy: The Test Is in the Teeth | AlgoViva",
  description: "South Africa's draft AI policy marks an important step, but its success will depend on more than good intentions.",
}

export default function SAIAPolicyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Policy analysis · 7 April 2026</div>
          <h1>South Africa&apos;s Draft AI Policy:<br /><em>The Test Is in the Teeth</em></h1>
          <p className="page-hero-sub">
            Akanimo Akpan, Nonhlanhla Akpan, Mikayla Arran, Franklyn Ugochukwu
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>

          <div style={{ marginBottom: 40, borderRadius: 6, overflow: 'hidden', position: 'relative', height: 360 }}>
            <Image
              src="/South-African-AI-Act-3.png"
              alt="South Africa AI Policy"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>

            <p style={{ marginBottom: 24 }}>
              Cabinet has approved the publication of South Africa&apos;s draft AI policy for public comment. For anyone who works at the intersection of technology and society, this is a significant moment, and an overdue one. While the policy was being developed, the technology was not waiting: credit decisions, hiring processes, healthcare triage, and public service delivery have all been quietly reshaped by AI systems that no formal South African framework governed. The policy&apos;s arrival is welcome. Whether it arrives with sufficient force is the question.
            </p>

            <p style={{ marginBottom: 24 }}>
              But South Africans have been here before. We have world-class legislation that does not translate into world-class outcomes. The Protection of Personal Information Act (POPIA) is a sophisticated piece of law. It has not stopped the daily flood of unsolicited marketing calls — the Information Regulator issued its first enforcement notice only in February 2024, more than three years after the Act took effect. Nor has it reversed the accelerating identity theft crisis, with impersonation fraud surging 400% between 2023 and 2024 while the law sat on the books. The gap between what a policy says and what it produces is not a new problem in this country. It is the central problem.
            </p>

            <p style={{ marginBottom: 24 }}>
              So when the full policy text is released for public comment in the coming days, the question worth asking is not whether it makes the right commitments. Based on what the Cabinet has announced, it likely does. The question is whether it has sufficient teeth to make those commitments real.
            </p>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', margin: '40px 0 16px', lineHeight: 1.2 }}>
              The definition of AI will tell you everything
            </h2>

            <p style={{ marginBottom: 24 }}>
              How a policy defines AI determines who falls inside its reach and who does not. A narrow technical definition — one that captures only machine learning models and generative AI systems — creates an immediate and exploitable gap.
            </p>

            <p style={{ marginBottom: 24 }}>
              Consider financial services as an example. Major banks in South Africa use sophisticated algorithmic models to make credit decisions that determine whether individuals can access home loans, business finance, or credit cards. Many of these models predate the current AI moment. They are statistical, rule-based, and in the strict technical sense, not AI. A narrow policy definition would place them outside the scope of regulation entirely, even as their consequences fall hardest on the people least able to challenge them. In February 2025, the CEOs of South Africa&apos;s biggest banks were called before a joint parliamentary committee to answer allegations of racial profiling in credit decision models. The models exist along with the allegations that the outcomes can be discriminatory. Would the impending AI policy sufficiently attend to this kind of dynamic?
            </p>

            <p style={{ marginBottom: 24 }}>
              This is the gap that regulatory arbitrage describes: the tendency of institutions to define their systems in whatever way keeps them outside the boundary of oversight. A narrow definition of AI can leave harmful systems without regulatory oversight and people on the receiving end of those system outputs without any legal framework for accountability and rectification. The harm is identical whether or not the system that produced it carries the label the policy regulates.
            </p>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', margin: '40px 0 16px', lineHeight: 1.2 }}>
              The pillars are promising but the mechanism is the question
            </h2>

            <p style={{ marginBottom: 24 }}>
              Minister in The Presidency Khumbudzo Ntshavheni notes that &ldquo;the policy is structured around six core pillars aimed at promoting the responsible development and ethical deployment of AI,&rdquo; including pillars on responsible governance and ethical and inclusive AI. These are the right areas of focus. The concern is not the pillars themselves but whether the policy will specify who is responsible for enforcing them, with what powers, and through what process an affected person can seek redress when things go wrong.
            </p>

            <p style={{ marginBottom: 24 }}>
              South Africa has a particular reason to take this seriously. The decisions that are easiest to automate first are not complex executive judgements. They are high-volume, rule-based decisions: whether someone qualifies for a loan, whether a job application advances to the next stage, whether a grant is approved. These are not edge cases in the economy. They are the decisions that shape life chances for the majority of South Africans — and they are already being made, in part, by algorithmic systems that no current framework adequately governs.
            </p>

            <p style={{ marginBottom: 24 }}>
              A policy with genuine teeth will name a lead institution with investigative authority, not merely advisory functions. It will require independent auditing for high-risk applications rather than relying on self-regulation by the industries with the most to lose from scrutiny. And it will provide accessible redress mechanisms for individuals affected by automated decisions, not only compliance pathways for the organisations deploying them.
            </p>

            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 600, color: 'var(--navy)', margin: '40px 0 16px', lineHeight: 1.2 }}>
              What we are watching for
            </h2>

            <p style={{ marginBottom: 24 }}>
              When the policy is published, read the definition of AI first. Then read the enforcement provisions. Everything else follows from those two things. A policy that defines AI broadly enough to capture consequential algorithmic systems, and that backs its ethical commitments with independent oversight and real accountability, would be genuinely world-leading. It would also be a meaningful departure from the pattern of excellent intentions and insufficient follow-through that has characterised too much of South Africa&apos;s technology governance.
            </p>

            <p style={{ marginBottom: 40 }}>
              The policy is out for comment precisely because it is not yet finished. That is the opportunity. AlgoViva will be making a formal submission when the full text is released. We invite others who care about getting this right to do the same.
            </p>

            <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
              <div style={{ fontSize: 12, color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Authors</div>
              <div style={{ fontSize: 15, color: 'var(--muted)' }}>Akanimo Akpan, Nonhlanhla Akpan, Mikayla Arran, Franklyn Ugochukwu</div>
              <div style={{ fontSize: 13, color: 'var(--light)', marginTop: 4 }}>7 April 2026</div>
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