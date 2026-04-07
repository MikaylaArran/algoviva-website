'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', org: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/mwvwynwg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          organisation: form.org,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-grid" />
        <div className="page-hero-inner">
          <div className="page-hero-label">Contact</div>
          <h1>Every engagement starts<br /><em>with a conversation.</em></h1>
          <p className="page-hero-sub">
            Tell us where you are starting from. We will tell you how we can help. No obligation, no pitch — just a conversation with people who understand what is at stake.
          </p>
        </div>
      </div>

      <section style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="about-grid">

          {/* FORM */}
          <div>
            <div className="section-label">Send us a message</div>
            <h2 className="section-title" style={{ fontSize: 'clamp(24px,3vw,36px)', marginBottom: 28 }}>Get in touch.</h2>

            {sent ? (
              <div style={{
                background: 'rgba(41,63,148,0.06)',
                border: '1px solid rgba(41,63,148,0.2)',
                borderRadius: 4,
                padding: '32px 28px',
              }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--brand)', marginBottom: 10 }}>
                  Message received.
                </div>
                <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>
                  Thank you for reaching out. Someone from our team will be in touch within two business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--muted)' }}>
                      Your name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--stone)', borderRadius: 'var(--r)', fontSize: 14, color: 'var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', outline: 'none' }}
                      placeholder="Full name"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--muted)' }}>
                      Organisation
                    </label>
                    <input
                      name="org"
                      value={form.org}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--stone)', borderRadius: 'var(--r)', fontSize: 14, color: 'var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', outline: 'none' }}
                      placeholder="Company / organisation"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--muted)' }}>
                    Email address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--stone)', borderRadius: 'var(--r)', fontSize: 14, color: 'var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', outline: 'none' }}
                    placeholder="you@organisation.com"
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--muted)' }}>
                    What can we help with?
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--stone)', borderRadius: 'var(--r)', fontSize: 14, color: 'var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="">Select a service area</option>
                    <option>AI Assurance (algorithmic audit)</option>
                    <option>AI Governance (frameworks &amp; strategy)</option>
                    <option>Digital Rights &amp; POPIA compliance</option>
                    <option>Navigator (governance benchmarking)</option>
                    <option>AlgoViva Kids</option>
                    <option>Advisory (retained support)</option>
                    <option>General enquiry</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--muted)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    style={{ width: '100%', padding: '11px 14px', border: '1px solid var(--stone)', borderRadius: 'var(--r)', fontSize: 14, color: 'var(--ink)', background: 'var(--white)', fontFamily: 'var(--sans)', outline: 'none', resize: 'vertical' }}
                    placeholder="Tell us about your situation, your organisation, and what you are trying to solve."
                  />
                </div>

                {error && (
                  <div style={{
                    fontSize: 13,
                    color: '#c05050',
                    background: 'rgba(192,80,80,0.08)',
                    border: '1px solid rgba(192,80,80,0.2)',
                    borderRadius: 4,
                    padding: '10px 14px',
                  }}>
                    Something went wrong. Please email us directly at mikayla@algoviva.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? 'var(--brand-l)' : 'var(--brand)',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    padding: '13px 30px',
                    borderRadius: 'var(--r)',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--sans)',
                    alignSelf: 'flex-start',
                  }}
                >
                  {loading ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>

          {/* CONTACT DETAILS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <div className="section-label">Direct contact</div>
              <h2 className="section-title" style={{ fontSize: 'clamp(24px,3vw,36px)', marginBottom: 24 }}>
                Prefer to reach us directly?
              </h2>
            </div>

            {/* Email */}
            
              href="mailto:mikayla@algoviva.com"
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 4, padding: '20px 22px', textDecoration: 'none' }}
            >
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(41,63,148,0.08)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                ✉
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--brand)', marginBottom: 4 }}>Email</div>
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--navy)', marginBottom: 3 }}>mikayla@algoviva.com</div>
                <div style={{ fontSize: 12, color: 'var(--light)', fontWeight: 300 }}>We respond within two business days</div>
              </div>
            </a>

            {/* WhatsApp */}
            
              href="https://wa.me/27640484228"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 4, padding: '20px 22px', textDecoration: 'none' }}
            >
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(37,211,102,0.12)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--brand)', marginBottom: 4 }}>WhatsApp</div>
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--navy)', marginBottom: 3 }}>+27 64 048 4228</div>
                <div style={{ fontSize: 12, color: 'var(--light)', fontWeight: 300 }}>Chat with us on WhatsApp</div>
              </div>
            </a>

            {/* Phone */}
            
              href="tel:+27640484228"
              style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 4, padding: '20px 22px', textDecoration: 'none' }}
            >
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(41,63,148,0.08)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                ✆
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--brand)', marginBottom: 4 }}>Phone</div>
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--navy)', marginBottom: 3 }}>+27 64 048 4228</div>
                <div style={{ fontSize: 12, color: 'var(--light)', fontWeight: 300 }}>Monday – Friday, 8am – 5pm SAST</div>
              </div>
            </a>

            {/* Location */}
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'var(--white)', border: '1px solid var(--stone)', borderRadius: 4, padding: '20px 22px' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(41,63,148,0.08)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                ◎
              </div>
              <div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'var(--brand)', marginBottom: 4 }}>Location</div>
                <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--navy)', marginBottom: 3 }}>Johannesburg, South Africa</div>
                <div style={{ fontSize: 12, color: 'var(--light)', fontWeight: 300 }}>We work across the continent</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}