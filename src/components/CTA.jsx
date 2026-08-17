import './CTA.css'

export default function CTA() {
  return (
    <section id="contact" className="section cta">
      <svg className="jagged-divider jagged-divider-top" viewBox="0 0 1200 34" preserveAspectRatio="none">
        <polygon
          points="0,0 0,20 60,12 130,26 210,10 300,24 390,8 470,20 560,6 650,18 740,4 830,22 920,10 1010,24 1090,8 1160,18 1200,14 1200,0"
          fill="var(--void)"
        />
      </svg>

      <div className="container cta-inner">
        <h2 className="cta-title">
          Let's see where your business<br />actually stands online.
        </h2>
        <p className="cta-sub">
          Free presence check, no commitment. We'll show you the score,
          not just tell you.
        </p>

        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Business name"
            aria-label="Business name"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
          />
          <button type="submit" className="btn btn-primary cut-corner-sm">
            Request my free check
          </button>
        </form>
      </div>
    </section>
  )
}
