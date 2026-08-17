import './Hero.css'

const score = 76
const radius = 50
const circumference = 2 * Math.PI * radius
const dashOffset = circumference * (1 - score / 100)

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-inner container">
        <p className="eyebrow hero-eyebrow">Websites · SEO · GEO · for local business</p>

        <h1 className="hero-title">
          We cut through the noise<br />
          so your business gets <span className="hero-title-accent">found.</span>
        </h1>

        <p className="hero-sub">
          Aakayanae builds your website, manages it, and gets you ranking —
          on Google and on the AI answers people ask instead. Then we hand
          you the numbers, in plain language, so you always know what's working.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary cut-corner">
            Get a free presence check
          </a>
          <a href="#services" className="btn btn-ghost-light">
            See what's included
          </a>
        </div>

        {/* Signature element: a live-feeling "before you hire us" score
            card. It puts the site's core promise — visibility you can
            actually see — directly in the first five seconds. */}
        <div className="hero-card cut-corner" aria-hidden="true">
          <div className="hero-card-top">
            <span className="eyebrow hero-card-eyebrow">Sample presence check</span>
            <span className="hero-card-name">Verma Family Dentistry</span>
          </div>

          <div className="hero-card-score">
            <svg viewBox="0 0 120 120" className="hero-dial">
              <circle cx="60" cy="60" r="50" className="hero-dial-track" />
              <circle
                cx="60" cy="60" r="50"
                className="hero-dial-value"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: dashOffset,
                }}
              />
            </svg>
            <div className="hero-dial-label">
              <span className="hero-dial-num">76</span>
              <span>/100</span>
            </div>
          </div>

          <ul className="hero-card-rows">
            <li><span>Google Business Profile</span><b className="ok">Optimized</b></li>
            <li><span>Site speed (mobile)</span><b className="warn">Needs work</b></li>
            <li><span>Shows up in AI answers</span><b className="ok">3 of 5 queries</b></li>
          </ul>
        </div>
      </div>

      <svg className="jagged-divider" viewBox="0 0 1200 34" preserveAspectRatio="none">
        <polygon
          points="0,34 0,14 60,22 130,6 210,20 300,4 390,18 470,8 560,22 650,10 740,24 830,6 920,18 1010,4 1090,20 1160,10 1200,16 1200,34"
          fill="var(--canvas)"
        />
      </svg>
    </section>
  )
}
