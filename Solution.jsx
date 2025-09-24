import React from 'react';
import { Link } from 'react-router-dom';

const Solution = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Our Solution: Habitat DAO</h2>
        <p className="solution-subtitle">
          A practical approach blending universal design, community governance, and tokenized incentives.
        </p>

        <div className="solution-grid">
          <Link to="/solution/universal-design" className="solution-card">
            <div className="solution-icon" aria-hidden>🏠</div>
            <h3>Universal Design Housing</h3>
            <p>Inclusive, accessible communities designed for people of all abilities and incomes.</p>
            <span className="solution-cta">Learn more →</span>
          </Link>

          <Link to="/solution/governance" className="solution-card">
            <div className="solution-icon" aria-hidden>🗳️</div>
            <h3>Community DAO Governance</h3>
            <p>Residents participate directly using transparent, on‑chain voting tools.</p>
            <span className="solution-cta">Explore governance →</span>
          </Link>

          <Link to="/solution/tokens" className="solution-card">
            <div className="solution-icon" aria-hidden>💠</div>
            <h3>Dual‑Token Crypto Economy</h3>
            <p>Tokenomics for fractional ownership, rewards, and seamless contributions.</p>
            <span className="solution-cta">View tokens →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Solution;

