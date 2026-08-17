import './Services.css'

const SERVICES = [
  {
    title: 'Website builds',
    body: 'Static, dynamic, animated or e-commerce — matched to what your business actually needs, not the priciest option.',
  },
  {
    title: 'SEO that ranks',
    body: 'On-page fixes, local keywords, and Google Business Profile work so you show up when someone searches nearby.',
  },
  {
    title: 'GEO, for AI search',
    body: "Optimized so tools like ChatGPT, Gemini and Google's AI Overviews recommend you, not just the ten blue links.",
  },
  {
    title: 'Ongoing management',
    body: 'Updates, backups, security and uptime — handled monthly, so the site keeps working after launch day.',
  },
  {
    title: 'Insights you can read',
    body: 'A plain-language dashboard: what changed, why, and what to do next. No jargon, no vanity metrics.',
  },
  {
    title: 'Local reputation',
    body: 'Reviews, listings and directory citations kept accurate and consistent across the places people check first.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="eyebrow services-eyebrow">What we do</p>
        <h2 className="services-title">
          One team for the site, the ranking, and the reporting.
        </h2>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service-card cut-corner-sm">
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
