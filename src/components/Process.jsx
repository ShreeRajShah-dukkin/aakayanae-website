import './Process.css'

const STEPS = [
  {
    step: '01',
    title: 'Free presence check',
    body: "We look at your current site (or lack of one), your search ranking, and how AI tools answer questions about your business.",
  },
  {
    step: '02',
    title: 'Build & launch',
    body: 'We pick the right type of site for your business and budget, then design, build and launch it — usually inside 3–4 weeks.',
  },
  {
    step: '03',
    title: 'Rank & optimize',
    body: 'SEO and GEO work begins: local keywords, listings, page speed, and structuring content so AI answer engines find it too.',
  },
  {
    step: '04',
    title: 'Monthly insight report',
    body: 'You get the panel — traffic, rankings, reviews — walked through in plain language, plus what we recommend doing next.',
  },
  {
    step: '05',
    title: 'Keep growing',
    body: "Ongoing management keeps the site secure and current, while we keep pushing rank, traffic and visibility upward.",
  },
]

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <p className="eyebrow process-eyebrow">How it works</p>
        <h2 className="process-title">Five steps, start to ongoing.</h2>

        <ol className="process-list">
          {STEPS.map((s) => (
            <li key={s.step} className="process-item">
              <span className="process-num">{s.step}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
