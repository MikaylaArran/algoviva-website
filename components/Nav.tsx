'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const links = [
    { href: '/#sectors', label: 'Who we serve' },
    { href: '/services', label: 'Services' },
    { href: '/navigator', label: 'Navigator' },
    { href: '/about', label: 'About us' },
    { href: '/resources', label: 'Resources' },
    { href: '/kids', label: 'AlgoViva Kids' },
  ]

  return (
    <nav>
      <Link href="/" className="nav-logo">Algo<span>Viva</span></Link>
      <button
        className={`nav-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={path === l.href ? 'nav-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
            Talk to us
          </Link>
        </li>
      </ul>
    </nav>
  )
}
