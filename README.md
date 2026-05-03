# Codeblock — Digital Product Agency Website

A modern, responsive agency website built with React and Vite. Showcases services, portfolio, pricing, and client testimonials with full English/Indonesian language support.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion / Motion |
| 3D Globe | Cobe |
| Email | EmailJS |
| Language | React Context (custom i18n) |

---

## Features

- **Multi-language** — Switch between English and Indonesian via Navbar dropdown
- **Interactive Globe** — Draggable 3D globe on the Hero section
- **Particle Background** — Animated particles across sections
- **Portfolio** — Project showcase with modal detail view
- **Pricing** — 3-tier pricing cards (Basic, Standard, Premium)
- **Testimonials** — Auto-scrolling marquee with client reviews
- **Contact Form** — EmailJS integration with success/error alerts
- **Fully Responsive** — Mobile, tablet, and desktop

---

## Project Structure

```
src/
├── lang/
│   ├── en.js               # English translations
│   ├── id.js               # Indonesian translations
│   └── LangContext.jsx     # Language context & useLang() hook
├── sections/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Product.jsx
│   ├── Pricing.jsx
│   ├── Testimonial.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── components/
│   ├── Globe.jsx
│   ├── HeroText.jsx
│   ├── Particles.jsx
│   ├── Marquee.jsx
│   ├── Project.jsx
│   ├── ProjectDetail.jsx
│   └── Alert.jsx
├── constants/
│   └── index.js            # Projects, socials, reviews data
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/nidioganteng/codeblock.git
cd codeblock

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory based on `.env.example`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your credentials at [emailjs.com](https://www.emailjs.com).

### Running the App

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

---

## Adding a New Language

1. Create `src/lang/xx.js` (e.g. `fr.js`) following the structure of `en.js`
2. Import and register it in `src/lang/LangContext.jsx`
3. Add the entry to the `languages` array in `src/sections/Navbar.jsx`

---

## Contact

- **WhatsApp** — [+62 881 622 3146](https://wa.me/628816223146)
- **Instagram** — [@codeblock.id](https://www.instagram.com/codeblock.id/)
- **LinkedIn** — [codeblock-id](https://www.linkedin.com/in/codeblock-id-993366382/)
- **Email** — codeblock.id@gmail.com

---

© 2025 Codeblock. All rights reserved.
