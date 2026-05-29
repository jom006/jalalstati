import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.jaybi.app&hl=fr';
const bEntertainedUrl = 'https://bentertained.dk/';
const email = 'jom006@gmail.com';
const internationalPhone = '+212611503550';
const displayPhone = '+212 611 503 550';

const jaybiScreenshots = [
  {
    src: '/assets/jaybi-screen-1.jpg',
    alt: 'Jaybi Android app spending overview screenshot',
  },
  {
    src: '/assets/jaybi-screen-2.jpg',
    alt: 'Jaybi Android app budget management screenshot',
  },
  {
    src: '/assets/jaybi-screen-3.jpg',
    alt: 'Jaybi Android app reporting screenshot',
  },
  {
    src: '/assets/jaybi-screen-4.jpg',
    alt: 'Jaybi Android app transaction screenshot',
  },
  {
    src: '/assets/jaybi-screen-5.jpg',
    alt: 'Jaybi Android app category management screenshot',
  },
  {
    src: '/assets/jaybi-screen-6.jpg',
    alt: 'Jaybi Android app expense entry screenshot',
  },
  {
    src: '/assets/jaybi-screen-7.jpg',
    alt: 'Jaybi Android app settings screenshot',
  },
];

const services = [
  {
    icon: ServerCog,
    title: 'PHP and Laravel platforms',
    text: 'Business applications, admin workflows, booking logic, API integrations and secure data handling.',
  },
  {
    icon: MonitorSmartphone,
    title: 'React web interfaces',
    text: 'Responsive dashboards and corporate websites with focused user journeys and maintainable components.',
  },
  {
    icon: Smartphone,
    title: 'React Native mobile apps',
    text: 'Android-first mobile experiences with practical features, local storage flows and store-ready presentation.',
  },
  {
    icon: Database,
    title: 'Operational systems',
    text: 'Database-backed tools, reporting views and finance-aware workflows shaped by real business constraints.',
  },
];

const stackGroups = [
  {
    title: 'Backend',
    items: ['PHP', 'Laravel', 'MySQL', 'REST APIs', 'Secure input handling'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Android apps', 'Local-first UX', 'Play Store publishing'],
  },
  {
    title: 'Delivery',
    items: ['GitHub', 'Cloudflare Pages', 'Performance checks', 'Public launch support'],
  },
];

const projects = [
  {
    label: 'Android finance app',
    title: 'Jaybi',
    description:
      'A simple and intuitive finance app for tracking daily expenses, understanding spending habits and managing money with less friction.',
    facts: ['Developer: STATI Jalal', '100+ downloads', 'PEGI 3', 'Updated May 10, 2026'],
    links: [
      {
        href: playStoreUrl,
        label: 'Open on Google Play',
      },
    ],
  },
  {
    label: 'Web platform',
    title: 'B Entertained',
    description:
      'A Danish booking and production website for artists, venues and live entertainment, built around discovery, trust and conversion.',
    facts: ['Booking and production business', '180+ venues', '100+ artists', '5000+ happy customers'],
    links: [
      {
        href: bEntertainedUrl,
        label: 'Visit website',
      },
    ],
  },
];

const footprint = [
  {
    year: '2010 onwards',
    title: 'Independent webmaster and developer footprint',
    text: 'Public profile data references long-running freelance webmaster work, PHP, JavaScript, CSS, MySQL and web development skills.',
    href: 'https://contactout.com/jalal-stati-56156',
  },
  {
    year: '2010',
    title: 'French and Arabic JavaScript teaching content',
    text: 'Early public tutorial material introduced JavaScript for people learning web development, with contact links tied to the jom006 identity.',
    href: 'https://www.automation-sense.com/videos/tutoriels-technologies/1-cours-tutoriels-javascript-1.html',
  },
  {
    year: '2010',
    title: 'PHP community support',
    text: 'Answered PHP date-handling questions in public developer forums under the jom006 profile.',
    href: 'https://forums.commentcamarche.net/forum/affich-18355078-php-recuperer-le-jour-d-une-date-specifique',
  },
  {
    year: '2025',
    title: 'AI automation community activity',
    text: 'Shared practical guidance in an Arabic AI and automation community, including Moroccan Darija voice-agent observations.',
    href: 'https://www.skool.com/arabic-ai-agents-academy/knowledge-sharing-for-the-dental-clinic-challenge-1-2',
  },
  {
    year: 'Legacy',
    title: 'jom006 public media presence',
    text: 'The jom006 handle has a long-running public media footprint, including programming and development listed as a hobby.',
    href: 'https://www.dailymotion.com/user/jom006',
  },
];

const sourceLinks = [
  ['Google Play', playStoreUrl],
  ['B Entertained', bEntertainedUrl],
  ['ContactOut profile', 'https://contactout.com/jalal-stati-56156'],
  [
    'Automation Sense tutorial',
    'https://www.automation-sense.com/videos/tutoriels-technologies/1-cours-tutoriels-javascript-1.html',
  ],
  [
    'CommentCaMarche PHP answer',
    'https://forums.commentcamarche.net/forum/affich-18355078-php-recuperer-le-jour-d-une-date-specifique',
  ],
  ['Skool AI post', 'https://www.skool.com/arabic-ai-agents-academy/knowledge-sharing-for-the-dental-clinic-challenge-1-2'],
  ['Dailymotion jom006', 'https://www.dailymotion.com/user/jom006'],
];

function ExternalLink({ href, children, className = 'inline-link' }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Jalal Stati home">
          <span className="brand-mark">JS</span>
          <span>Jalal Stati</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#footprint">Footprint</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero section-band">
        <div className="hero-copy">
          <p className="eyebrow">PHP, Laravel, React and React Native developer</p>
          <h1>Corporate web and mobile software built around practical business outcomes.</h1>
          <p className="lead">
            I build reliable web platforms, operational tools and Android applications, combining backend delivery with
            clean React interfaces and mobile-first thinking.
          </p>
          <div className="hero-actions" aria-label="Contact actions">
            <a className="button primary" href={`mailto:${email}`}>
              <Mail size={18} aria-hidden="true" />
              Email Jalal
            </a>
            <a className="button secondary" href="#projects">
              <BriefcaseBusiness size={18} aria-hidden="true" />
              View Work
            </a>
          </div>
          <ul className="trust-list" aria-label="Key capabilities">
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              Business systems
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              Android apps
            </li>
            <li>
              <CheckCircle2 size={18} aria-hidden="true" />
              Finance-aware workflows
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Jaybi app preview">
          <div className="phone-frame">
            <img src="/assets/jaybi-screen-1.jpg" alt="Jaybi Android app interface preview" />
          </div>
          <div className="proof-strip" aria-label="Portfolio proof points">
            <div>
              <strong>Jaybi</strong>
              <span>Android finance app</span>
            </div>
            <div>
              <strong>B Entertained</strong>
              <span>Danish booking website</span>
            </div>
          </div>
        </div>
      </section>

      <section className="intro section-band">
        <div className="section-heading compact">
          <p className="eyebrow">Profile</p>
          <h2>Developer with a practical finance and operations mindset.</h2>
        </div>
        <p>
          My public footprint connects software delivery with finance, accounting, teaching and community support. That
          combination is useful for companies that need software to fit how real teams, customers and back-office
          processes actually work.
        </p>
      </section>

      <section id="services" className="section-band">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Focused delivery across backend, frontend and mobile.</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={28} aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="stack section-band">
        <div className="section-heading">
          <p className="eyebrow">Technology</p>
          <h2>A stack designed for maintainable business delivery.</h2>
        </div>
        <div className="stack-grid">
          {stackGroups.map((group) => (
            <article className="stack-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects section-band">
        <div className="section-heading">
          <p className="eyebrow">Featured work</p>
          <h2>Selected public projects and product proof.</h2>
        </div>

        <article className="featured-project">
          <div className="project-copy">
            <span className="project-label">{projects[0].label}</span>
            <h3>{projects[0].title}</h3>
            <p>{projects[0].description}</p>
            <div className="fact-row" aria-label="Jaybi facts">
              {projects[0].facts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>
            <ExternalLink href={projects[0].links[0].href} className="button link-button">
              {projects[0].links[0].label}
            </ExternalLink>
          </div>
          <div className="screenshot-grid" aria-label="Jaybi screenshots">
            {jaybiScreenshots.map((screen) => (
              <img key={screen.src} src={screen.src} alt={screen.alt} loading="lazy" />
            ))}
          </div>
        </article>

        <article className="project-card wide">
          <div>
            <span className="project-label">{projects[1].label}</span>
            <h3>{projects[1].title}</h3>
            <p>{projects[1].description}</p>
            <div className="fact-row" aria-label="B Entertained facts">
              {projects[1].facts.map((fact) => (
                <span key={fact}>{fact}</span>
              ))}
            </div>
          </div>
          <ExternalLink href={projects[1].links[0].href} className="button secondary project-button">
            {projects[1].links[0].label}
          </ExternalLink>
        </article>
      </section>

      <section id="footprint" className="section-band">
        <div className="section-heading">
          <p className="eyebrow">Public footprint</p>
          <h2>Long-running technical activity across web, education and automation.</h2>
        </div>
        <div className="timeline">
          {footprint.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.title}`}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ExternalLink href={item.href}>View source</ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section-band">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Available for web platforms, mobile apps and business tooling.</h2>
          <p>
            Send a short brief with your goals, current stack and timeline. I can help with implementation, rebuilds,
            maintenance and technical product delivery.
          </p>
        </div>
        <div className="contact-actions" aria-label="Contact methods">
          <a href={`mailto:${email}`}>
            <Mail size={22} aria-hidden="true" />
            <span>{email}</span>
          </a>
          <a href={`tel:${internationalPhone}`}>
            <Phone size={22} aria-hidden="true" />
            <span>{displayPhone}</span>
          </a>
          <a href="https://wa.me/212611503550" target="_blank" rel="noreferrer">
            <MessageCircle size={22} aria-hidden="true" />
            <span>WhatsApp 0611503550</span>
          </a>
        </div>
      </section>

      <section className="sources section-band" aria-label="Public source references">
        <div className="source-heading">
          <ShieldCheck size={22} aria-hidden="true" />
          <h2>Public references</h2>
        </div>
        <div className="source-links">
          {sourceLinks.map(([label, href]) => (
            <ExternalLink key={href} href={href}>
              {label}
            </ExternalLink>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Jalal Stati</strong>
          <span>PHP, Laravel, React and React Native developer</span>
        </div>
        <div className="footer-meta">
          <span>
            <MapPin size={16} aria-hidden="true" />
            Morocco, serving remote clients
          </span>
          <span>
            <Globe2 size={16} aria-hidden="true" />
            Cloudflare Pages ready
          </span>
          <span>
            <Code2 size={16} aria-hidden="true" />
            GitHub: jom006/jalalstati
          </span>
          <span>
            <Rocket size={16} aria-hidden="true" />
            2026
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;
