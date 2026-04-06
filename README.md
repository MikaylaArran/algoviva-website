# AlgoViva Website

Built with **Next.js 14** (App Router) · **TypeScript** · Deployed on **Vercel**

---

## Project structure

```
algoviva website/
├── app/
│   ├── layout.tsx          ← shared layout (Nav + Footer on every page)
│   ├── globals.css         ← all styles and design tokens
│   ├── page.tsx            ← home page (/)
│   ├── about/page.tsx      ← /about
│   ├── services/page.tsx   ← /services
│   ├── navigator/page.tsx  ← /navigator
│   ├── resources/page.tsx  ← /resources
│   ├── kids/page.tsx       ← /kids
│   └── contact/
│       ├── layout.tsx      ← metadata
│       └── page.tsx        ← /contact
├── components/
│   ├── Nav.tsx             ← shared nav bar
│   └── Footer.tsx          ← shared footer
├── public/                 ← logo, favicon go here
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## Step-by-step setup

### 1 — Install Node.js
Download the LTS version from https://nodejs.org

### 2 — Open in VS Code
File → Open Folder → select your `algoviva website` folder

### 3 — Install dependencies
```bash
npm install
```

### 4 — Run locally
```bash
npm run dev
```
Open http://localhost:3000 — all pages should work:
- / · /about · /services · /navigator · /resources · /kids · /contact

### 5 — Push to GitHub
Create a new PRIVATE repo at github.com/new (no README), then:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/algoviva-website.git
git push -u origin main
```

### 6 — Deploy on Vercel
1. vercel.com → Add New Project → import your repo → Deploy
2. Done — live in ~60 seconds

### 7 — Connect algoviva.com
1. Vercel → Settings → Domains → add algoviva.com + www.algoviva.com
2. Copy the DNS records Vercel gives you
3. In your domain registrar → replace Framer DNS records with Vercel's
4. Wait 10–60 min — your Framer site stays live until the switch

---

## Making changes
```bash
git add .
git commit -m "describe change"
git push
```
Vercel redeploys automatically within ~30 seconds.

---

## Contact form
Currently simulates submission. To make it live, connect to:
- **Formspree** — formspree.io (easiest, no backend)
- **Resend** — resend.com (more control)

Tell me which and I'll wire it up.

---

## Still to come
- [ ] Logo hex colours → SVG logo + favicon
- [ ] Contact form email service
- [ ] AI Monitor page
