import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WHITEPAPER_URL = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
const EXPLAINER_YT = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [email, setEmail] = useState('');

  const handleDownloadWhitepaper = async () => {
    try {
      const response = await fetch(WHITEPAPER_URL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Habitat-Whitepaper.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      window.open(WHITEPAPER_URL, '_blank', 'noopener');
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    // Save locally so list persists without backend
    const subs = JSON.parse(localStorage.getItem('subscriptions') || '[]');
    subs.push({ email, at: new Date().toISOString() });
    localStorage.setItem('subscriptions', JSON.stringify(subs));

    try {
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_SUBSCRIBE_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (PUBLIC_KEY && SERVICE_ID && TEMPLATE_ID) {
        await new Promise((resolve, reject) => {
          if (window.emailjs) return resolve();
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
          s.onload = resolve; s.onerror = reject; document.body.appendChild(s);
        });
        if (window.emailjs && !window._emailjs_init) { window.emailjs.init(PUBLIC_KEY); window._emailjs_init = true; }
        await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          to_email: email,
          subject: 'Habitat DAO subscription',
          message: 'You subscribed to Habitat DAO updates. We will reach you shortly with news.'
        });
      }
      alert('You subscribed to Habitat DAO. Please check your inbox.');
      setEmail('');
    } catch (err) {
      console.error('Subscribe email failed:', err);
      alert('Subscribed!');
    }
  };

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h2>Building Sustainable Communities<br/>for a Better Tomorrow</h2>
          <p>Habitat connects people with nature, fostering environmental awareness and creating lasting positive change in communities worldwide.</p>
          <div className="actions">
            <button className="btn" onClick={handleDownloadWhitepaper}>Download Whitepaper</button>
            <button className="btn btn-outline" onClick={() => setShowVideo(true)}>Watch Explainer Video</button>
          </div>
        </div>
      </section>

      

      {showVideo && (
        <div className="modal-overlay" onClick={() => setShowVideo(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowVideo(false)}>×</button>
            <div className="video-wrap">
              <iframe
                width="100%"
                height="100%"
                src={EXPLAINER_YT}
                title="Explainer Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <section className="problem">
        <div className="container">
          <h2 className="problem-title">The Problem</h2>
          <p className="problem-subtitle">
            Millions lack access to safe, inclusive, and affordable housing. Zoning, funding gaps, and
            outdated models limit impact.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">580K</div>
              <div className="stat-label">Americans experiencing homelessness</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">7.3M</div>
              <div className="stat-label">Affordable housing units needed</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$290B</div>
              <div className="stat-label">Annual funding gap</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions section (moved below Problem) */}
      <section className="solution">
        <div className="container">
          <h2 className="solution-title">Our Solution: Habitat DAO</h2>
          <p className="solution-subtitle">A practical approach blending universal design, community governance, and tokenized incentives.</p>
          <div className="solution-grid">
            <Link to="/solution" className="solution-card">
              <div className="solution-icon" aria-hidden>🏠</div>
              <h3>Universal Design Housing</h3>
              <p>Inclusive, accessible communities designed for people of all abilities and incomes.</p>
              <span className="solution-cta">Learn more →</span>
            </Link>
            <Link to="/governance" className="solution-card">
              <div className="solution-icon" aria-hidden>🗳️</div>
              <h3>Community DAO Governance</h3>
              <p>Residents participate directly using transparent, on-chain voting tools.</p>
              <span className="solution-cta">Learn more →</span>
            </Link>
            <Link to="/tokens" className="solution-card">
              <div className="solution-icon" aria-hidden>💠</div>
              <h3>Dual‑Token Crypto Economy</h3>
              <p>Tokenomics for fractional ownership, rewards, and seamless contributions.</p>
              <span className="solution-cta">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Universal Design in Practice section under Our Solution */}
      <section className="practice">
        <div className="container">
          <h2 className="practice-title">Universal Design in Practice</h2>
          <p className="practice-subtitle">Design that welcomes all. Walkable, accessible, equitable communities for mixed incomes and abilities.</p>
          <div className="practice-grid">
            <Link to="/solution/universal-design/accessibility" className="practice-card">
              <h3>Accessibility First</h3>
              <p>Ramps, wide doorways, and adaptive features integrated seamlessly into beautiful design.</p>
              <span className="practice-cta">Explore →</span>
            </Link>
            <Link to="/solution/universal-design/mixed-income" className="practice-card">
              <h3>Mixed Income</h3>
              <p>Diverse housing options from affordable units to market‑rate homes in the same community.</p>
              <span className="practice-cta">Explore →</span>
            </Link>
            <Link to="/solution/universal-design/walkable" className="practice-card">
              <h3>Walkable Design</h3>
              <p>15‑minute neighborhoods with essential services accessible by foot or wheelchair.</p>
              <span className="practice-cta">Explore →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Governance highlight section */}
      <section className="solution governance">
        <div className="container">
          <h2 className="solution-title">Community Governance Through DAO</h2>
          <p className="solution-subtitle">Residents vote and manage budgets and services via secure smart‑contract tooling.</p>
          <div className="solution-grid">
            <Link to="/governance/voting" className="solution-card">
              <div className="solution-icon" aria-hidden>🗳️</div>
              <h3>Transparent Voting</h3>
              <p>All decisions recorded on‑chain for complete transparency.</p>
              <span className="solution-cta">Explore voting →</span>
            </Link>
            <Link to="/governance/budget" className="solution-card">
              <div className="solution-icon" aria-hidden>💼</div>
              <h3>Budget Control</h3>
              <p>Collectively decide how community funds are allocated and spent.</p>
              <span className="solution-cta">Explore budget →</span>
            </Link>
            <Link to="/governance/services" className="solution-card">
              <div className="solution-icon" aria-hidden>🛠️</div>
              <h3>Service Management</h3>
              <p>Oversight of maintenance, security, and programs.</p>
              <span className="solution-cta">Explore services →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dual‑Token System under Community Governance */}
      <section className="tokens">
        <div className="container">
          <h2 className="tokens-title">Dual‑Token System</h2>
          <div className="tokens-grid">
            <Link to="/tokens/hat" className="token-card token-hat">              <h3>HAT (Habitat Asset Token)</h3>
              <p>
                Fractional ownership in property and infrastructure. HAT tokens represent your
                stake in the community's real estate assets, appreciating in value as the
                community grows and property values increase.
              </p>
              <span className="solution-cta">Learn more →</span>
            </Link>
            <Link to="/tokens/husd" className="token-card token-husd">
              <h3>HUSD (Habitat Stablecoin)</h3>
              <p>
                Used for daily transactions like rent, groceries, and services. HUSD provides
                price stability for everyday transactions while keeping value within the
                community ecosystem.
              </p>
              <span className="solution-cta">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal & Compliance section */}
      <section className="legal">
        <div className="container">
          <h2 className="legal-title">Legal & Compliance</h2>
          <ul className="legal-list">
            <li className="legal-item">Wyoming DAO LLC structure providing legal recognition and liability protection</li>
            <li className="legal-item">SEC, KYC/AML, and real estate regulation compliance ensuring investor protection</li>
            <li className="legal-item">Token classification and liability protections under current regulatory framework</li>
            <li className="legal-item">Partnership agreements with local municipalities and housing authorities</li>
          </ul>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="roadmap">
        <div className="container">
          <h2 className="roadmap-title">Implementation Roadmap</h2>
          <ol className="roadmap-list">
            <li className="roadmap-item">
              <span className="roadmap-badge">1</span>
              <div className="roadmap-card">Form DAO and launch tokens with initial community of 100 founding members</div>
            </li>
            <li className="roadmap-item">
              <span className="roadmap-badge">2</span>
              <div className="roadmap-card">Acquire land and build pilot community with 50 units in partnership with local government</div>
            </li>
            <li className="roadmap-item">
              <span className="roadmap-badge">3</span>
              <div className="roadmap-card">Deploy governance tools and establish community voting protocols</div>
            </li>
            <li className="roadmap-item">
              <span className="roadmap-badge">4</span>
              <div className="roadmap-card">Scale to multiple locations and integrate additional services like healthcare and education</div>
            </li>
            <li className="roadmap-item">
              <span className="roadmap-badge">5</span>
              <div className="roadmap-card">Measure and optimize impact through continuous data collection and community feedback</div>
            </li>
          </ol>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="impact">
        <div className="container">
          <h2 className="impact-title">Impact That Matters</h2>
          <p className="impact-subtitle">We will track outcomes such as housing units built, DAO participation, and service adoption.</p>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-value">500+</div>
              <div className="impact-label">Housing Units Planned</div>
            </div>
            <div className="impact-card">
              <div className="impact-value">85%</div>
              <div className="impact-label">Expected DAO Participation</div>
            </div>
            <div className="impact-card">
              <div className="impact-value">$50M</div>
              <div className="impact-label">Initial Funding Target</div>
            </div>
            <div className="impact-card">
              <div className="impact-value">3</div>
              <div className="impact-label">Cities in Phase 1</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner & Subscribe */}
      <section className="partner">
        <div className="container">
          <h2 className="partner-title">Partner With Us</h2>
          <p className="partner-subtitle">Join nonprofits, public agencies, and mission‑aligned investors in reshaping housing.</p>
          <div className="partner-actions">
            <a className="btn partner-btn" href="/partner">Become a Partner</a>
          </div>
        </div>
      </section>

      <section className="subscribe">
        <div className="container">
          <p className="subscribe-title">Want updates on the DAO pilot? Subscribe below.</p>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input className="subscribe-input" type="email" placeholder="Your email address" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <button className="btn subscribe-btn" type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Home;