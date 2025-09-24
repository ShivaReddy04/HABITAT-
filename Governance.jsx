import React from 'react';
import { Link } from 'react-router-dom';

const Governance = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Governance</h2>
        <p className="solution-subtitle">Accountability and shared decision‑making with transparent processes.</p>

        <div className="solution-grid">
          <Link to="/governance/transparency" className="solution-card">
            <div className="solution-icon" aria-hidden>🔍</div>
            <h3>Transparency</h3>
            <p>Open data, auditable proposals, and clear reporting for the community.</p>
            <span className="solution-cta">Learn more →</span>
          </Link>
          <Link to="/governance/budget-control" className="solution-card">
            <div className="solution-icon" aria-hidden>💼</div>
            <h3>Budget Control</h3>
            <p>Allocate resources collectively with real‑time insight and accountability.</p>
            <span className="solution-cta">Learn more →</span>
          </Link>
          <Link to="/governance/service-management" className="solution-card">
            <div className="solution-icon" aria-hidden>🛠️</div>
            <h3>Service Management</h3>
            <p>Plan, track, and evaluate services to meet community priorities.</p>
            <span className="solution-cta">Learn more →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Governance;

