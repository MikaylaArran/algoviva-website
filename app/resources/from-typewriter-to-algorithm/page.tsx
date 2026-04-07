import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'From Typewriter to Algorithm: Why I co-founded AlgoViva | AlgoViva',
  description: 'The story of my father\'s typewriter is more than a family memory. It is a lesson about technological change and human resilience.',
}

export default function TypewriterToAlgorithmPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Personal essay · 9 November 2025</div>
          <h1>From Typewriter to Algorithm:<br /><em>Why I co-founded AlgoViva</em></h1>
          <p className="page-hero-sub">Akanimo Akpan</p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ maxWidth: 740, margin: '0 auto' }}>
          <div style={{ fontSize: 17, lineHeight: 1.85, color: 'var(--ink)', fontWeight: 300 }}>

            <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start', marginBottom: 40, background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 6, padding: 24 }}>
              <div style={{ position: 'relative', width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                <Image src="/akanimo-akpan.jpg" alt="Akanimo Akpan" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--navy)', marginBottom: 4 }}>Akanimo Akpan</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6 }}>Co-founder, AlgoViva · PhD in Computational and AI Ethics · Systems change practitioner</div>
                <div style={{ fontSize: 12, color: 'var(--light)', marginTop: 6 }}>9 November 2025</div>
              </div>
            </div>

            <p style={{ marginBottom: 24, fontSize: 20, fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--navy)', borderLeft: '3px solid var(--brand)', paddingLeft: 24 }}>
              The story of my father&apos;s typewriter is more than a family memory. It is a lesson about technological change and human resilience. When the computer replaced the typewriter, many people like him were left behind — not because they lacked effort, but because the systems around them failed to adapt with empathy.
            </p>

            <p style={{ marginBottom: 24 }}>
              I was born into a lower-middle-class family of working parents in Nigeria. My mother was a primary school teacher; my father worked as a secretary to an Irish doctor, though &ldquo;secretary&rdquo; was really a glorified way of saying typist. He could type 195 words per minute on his beloved Olympia typewriter, his fingers dancing with precision over the keys and the noise of the keys sometimes waking me up as he would often work into the dead of night.
            </p>

            <p style={{ marginBottom: 24 }}>
              In the 1990s, while Europe was moving on from typewriters, in our corner of Nigeria they were still prized. My father&apos;s typewriter became both a source of livelihood and symbol of aspiration that filled our home with a sense of purpose. After hours, he ran a small business typing university theses, book manuscripts, church bulletins, wedding programmes, even funeral brochures. Alongside it, he owned a mimeograph, a duplicating machine that could copy stencilled text, which filled our home with the smell of ink and the rhythm of industry. Many of my peers will ask what a mimeograph is. As my son would say: &ldquo;Google it.&rdquo;
            </p>

            <p style={{ marginBottom: 24 }}>
              Then came the early 2000s, and with them, the personal computer. My father bought one, curious and hopeful. But as computers evolved into laptops and software became more sophisticated, the skills that had once defined his profession grew obsolete. He could no longer keep pace with the speed of change. Bit by bit, his business faded, and so did the comforts that once defined our family life. The loss wasn&apos;t only financial — it was a quiet erosion of dignity, of belonging in a world that had raced ahead, of a difficult and strained marriage.
            </p>

            <p style={{ marginBottom: 24 }}>
              That experience never left me. It was my first encounter with what it means to be left behind by technology.
            </p>

            <p style={{ marginBottom: 24 }}>
              While change is inevitable, the disruption brought about by artificial intelligence and automation will be far greater than what my father and family faced. Yet, even as this new era unfolds, many organisations are still unprepared — not only technologically, but ethically and socially. Too few are investing in reskilling, rethinking, or responsibly adapting to this transformation. The consequences for work, democracy, and human wellbeing are profound.
            </p>

            <p style={{ marginBottom: 24 }}>
              In 2020, I decided to confront these questions head-on by enrolling for a PhD in Computational and AI Ethics and wrote a thesis titled: &ldquo;Decolonising Algorithms: Towards the making of epistemically just Algorithms.&rdquo; When I began, tools like ChatGPT didn&apos;t exist; by the time I submitted my thesis, they were slowly reshaping the world. My motivation for pursuing this degree was deeply personal: first, to ensure that technology does not leave others behind as it did my family; and second, to help society anticipate and mitigate the inequalities that unchecked technological progress can deepen.
            </p>

            <p style={{ marginBottom: 24 }}>
              For nearly a decade, I have been working at the intersection of complexity and social change, helping organisations and multi-stakeholder groups tackle issues ranging from health equity to climate change to institutional transformation. Over time, I realised that these same skills — systems thinking, facilitation across divides, and ethical decision-making under uncertainty — were exactly what the world needed to govern artificial intelligence responsibly.
            </p>

            <p style={{ marginBottom: 24 }}>
              That realisation led to the birth of AlgoViva.
            </p>

            <div style={{ background: 'rgba(41,63,148,0.05)', border: '1px solid rgba(41,63,148,0.15)', borderRadius: 4, padding: '24px 28px', marginBottom: 32 }}>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                AlgoViva is a governance, assurance, and digital rights company shaping a future where technology serves people, organisations, and the planet. Our purpose is to help organisations harness AI to achieve their goals responsibly, ethically, and with lasting impact. We work with organisations to design, govern, and deploy AI across systems, strategy, and culture.
              </p>
            </div>

            <p style={{ marginBottom: 24 }}>
              At the heart of our work is a simple conviction: technology itself is rarely the problem. The real challenge lies in the misalignment between people, processes, and values.
            </p>

            <p style={{ marginBottom: 40 }}>
              Had these been properly aligned when the typewriter gave way to the computer, my father and countless others like him might not have been left behind. AlgoViva exists to make sure the next generation doesn&apos;t suffer the same fate.
            </p>

            <div style={{ borderTop: '1px solid var(--stone)', paddingTop: 32 }}>
              <div style={{ fontSize: 12, color: 'var(--light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Author</div>
              <div style={{ fontSize: 15, color: 'var(--muted)' }}>Akanimo Akpan</div>
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