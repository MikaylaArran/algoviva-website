import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="ft-brand">Algo<span>Viva</span></div>
        <div className="ft-tag">For the life of people and planet</div>
      </div>
      <div className="ft-right">
        <div className="ft-links">
          <Link href="/#sectors">Who we serve</Link>
          <Link href="/services">Services</Link>
          <Link href="/navigator">Navigator</Link>
          <Link href="/about">About us</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/kids">AlgoViva Kids</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="ft-copy">
          © 2025 AlgoViva (Pty) Ltd · Johannesburg ·{' '}
          <a href="mailto:hello@algoviva.com">hello@algoviva.com</a>
        </div>
      </div>
    </footer>
  )
}
