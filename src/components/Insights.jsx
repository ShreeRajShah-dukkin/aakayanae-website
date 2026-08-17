import { useEffect, useRef, useState } from 'react'
import './Insights.css'

const KEYWORD_RANKS = [
  { label: '"plumber near me"', value: 92 },
  { label: '"emergency pipe repair"', value: 74 },
  { label: 'business name search', value: 98 },
  { label: '"licensed plumber [city]"', value: 61 },
]

const TRAFFIC_POINTS = '0,58 20,52 40,54 60,40 80,36 100,22 120,18 140,8'

export default function Insights() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="insights" ref={sectionRef} className="section insights">
      <svg className="jagged-divider jagged-divider-top" viewBox="0 0 1200 34" preserveAspectRatio="none">
        <polygon
          points="0,0 0,20 60,12 130,26 210,10 300,24 390,8 470,20 560,6 650,18 740,4 830,22 920,10 1010,24 1090,8 1160,18 1200,14 1200,0"
          fill="var(--void)"
        />
      </svg>

      <div className="container insights-inner">
        <div className="insights-copy">
          <p className="eyebrow insights-eyebrow">Why it's different</p>
          <h2 className="insights-title">
            You don't just get a website.<br />You get to see it working.
          </h2>
          <p className="insights-sub">
            Every client gets a monthly panel like this one — real ranking
            positions, real traffic, real reviews. We walk you through what
            moved, why, and the one or two things worth doing next.
          </p>
        </div>

        <div className={`insights-panel cut-corner ${inView ? 'is-visible' : ''}`}>
          <div className="panel-row">
            <div className="panel-block">
              <span className="eyebrow panel-label">Monthly visitors</span>
              <div className="panel-traffic">
                <svg viewBox="0 0 140 60" preserveAspectRatio="none" className="traffic-svg">
                  <polyline points={TRAFFIC_POINTS} className="traffic-line" />
                </svg>
                <div className="panel-traffic-num">
                  <span>3,240</span>
                  <b className="ok">+38%</b>
                </div>
              </div>
            </div>

            <div className="panel-block">
              <span className="eyebrow panel-label">Google review rating</span>
              <div className="panel-stars">★★★★★ <b>4.8</b></div>
              <p className="panel-note">126 reviews, up from 71</p>
            </div>
          </div>

          <div className="panel-block panel-block-wide">
            <span className="eyebrow panel-label">Keyword rankings</span>
            <ul className="panel-bars">
              {KEYWORD_RANKS.map((k) => (
                <li key={k.label}>
                  <span className="panel-bar-label">{k.label}</span>
                  <span className="panel-bar-track">
                    <span
                      className="panel-bar-fill"
                      style={{ width: inView ? `${k.value}%` : '0%' }}
                    />
                  </span>
                  <span className="panel-bar-value">{k.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
