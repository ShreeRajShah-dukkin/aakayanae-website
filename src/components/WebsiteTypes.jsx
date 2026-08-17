import './WebsiteTypes.css'

const TYPES = [
  {
    name: 'Static',
    bestFor: 'A clinic, salon or shop that needs to look sharp and load fast',
    body: 'Fixed pages, built once and built well. The lightest option, and the fastest to launch.',
  },
  {
    name: 'Dynamic',
    bestFor: 'A business with listings, bookings, or content that changes often',
    body: 'Pages that pull from a database — menus, availability, blog posts — updated without a developer.',
  },
  {
    name: 'Animated / interactive',
    bestFor: 'A brand that wants to feel premium from the first scroll',
    body: 'Motion and micro-interactions used with intent, not decoration — for studios, agencies, and launches.',
  },
  {
    name: 'E-commerce',
    bestFor: 'Anyone selling products online, from ten items to ten thousand',
    body: 'Catalog, cart and checkout, set up to actually convert — not just look like a store.',
  },
  {
    name: 'Landing / campaign',
    bestFor: 'A single offer, event, or ad campaign that needs one clear action',
    body: 'One page, one goal. Built fast for a specific push, then retired or folded into the main site.',
  },
]

export default function WebsiteTypes() {
  return (
    <section id="website-types" className="section types">
      <div className="container">
        <p className="eyebrow types-eyebrow">Not every business needs the same site</p>
        <h2 className="types-title">Pick a starting point. We'll confirm it fits.</h2>

        <div className="types-list">
          {TYPES.map((t) => (
            <div key={t.name} className="type-row">
              <span className="type-mark cut-corner-sm" aria-hidden="true">
                {t.name.charAt(0)}
              </span>
              <div className="type-body">
                <h3>{t.name}</h3>
                <p className="type-best">{t.bestFor}</p>
                <p className="type-desc">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
