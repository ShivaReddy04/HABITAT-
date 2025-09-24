import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const TokensHome = () => (
  <section className="section">
    <div className="container">
      <h2>Tokens</h2>
      <p>
        Our dual‑token model aligns long‑term ownership with day‑to‑day utility. Choose a token to learn more.
      </p>
      <div className="tokens-grid" style={{marginTop:'1rem'}}>
        <Link to="/tokens/hat" className="token-card token-hat">
          <h3>HAT (Habitat Asset Token)</h3>
          <p>Represents fractional ownership in real estate assets and community infrastructure.</p>
        </Link>
        <Link to="/tokens/husd" className="token-card token-husd">
          <h3>HUSD (Habitat Stablecoin)</h3>
          <p>Stable medium of exchange for rent, services, and incentives within the ecosystem.</p>
        </Link>
      </div>
    </div>
  </section>
);

const Hat = () => (
  <section className="section">
    <div className="container">
      <h2>HAT — Habitat Asset Token</h2>
      <p>
        HAT is an ownership token backed by community real‑estate and infrastructure. Holders may receive
        proportional governance rights and access to reports on the underlying assets.
      </p>
      <div className="diagram-wrap">
        <svg className="diagram" viewBox="0 0 640 220" aria-hidden>
          <defs>
            <linearGradient id="blueGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa"/>
              <stop offset="100%" stopColor="#22d3ee"/>
            </linearGradient>
          </defs>
          <rect x="20" y="40" width="160" height="90" rx="12" className="d-box"/>
          <text x="100" y="95" textAnchor="middle" className="d-text">Assets</text>

          <rect x="240" y="40" width="160" height="90" rx="12" className="d-box"/>
          <text x="320" y="75" textAnchor="middle" className="d-text">Revenue</text>
          <text x="320" y="98" textAnchor="middle" className="d-sub">rents, fees</text>

          <rect x="460" y="40" width="160" height="90" rx="12" className="d-box"/>
          <text x="540" y="75" textAnchor="middle" className="d-text">HAT Holders</text>
          <text x="540" y="98" textAnchor="middle" className="d-sub">reports, rights</text>

          <path d="M180 85 H235" className="d-arrow"/>
          <polygon points="235,85 225,79 225,91" className="d-arrow-head"/>
          <path d="M400 85 H455" className="d-arrow"/>
          <polygon points="455,85 445,79 445,91" className="d-arrow-head"/>
        </svg>
      </div>
      <ul style={{textAlign:'left', marginTop:'1rem'}}>
        <li>Backed by income‑producing assets</li>
        <li>Designed for long‑term value alignment</li>
        <li>Transferable within compliant venues</li>
      </ul>
      <p style={{marginTop:'1rem'}}><Link to="/tokens">← All tokens</Link></p>
    </div>
  </section>
);

const Husd = () => (
  <section className="section">
    <div className="container">
      <h2>HUSD — Habitat Stablecoin</h2>
      <p>
        HUSD is a stablecoin for everyday transactions in the community. It enables transparent, low‑cost
        payments while maintaining price stability.
      </p>
      <div className="diagram-wrap">
        <svg className="diagram" viewBox="0 0 640 220" aria-hidden>
          <rect x="40" y="40" width="160" height="90" rx="12" className="d-box"/>
          <text x="120" y="95" textAnchor="middle" className="d-text">Residents</text>

          <rect x="240" y="40" width="160" height="90" rx="12" className="d-box"/>
          <text x="320" y="75" textAnchor="middle" className="d-text">HUSD</text>
          <text x="320" y="98" textAnchor="middle" className="d-sub">payments</text>

          <rect x="440" y="40" width="160" height="90" rx="12" className="d-box"/>
          <text x="520" y="75" textAnchor="middle" className="d-text">Services</text>
          <text x="520" y="98" textAnchor="middle" className="d-sub">rent, utilities</text>

          <path d="M200 85 H235" className="d-arrow"/>
          <polygon points="235,85 225,79 225,91" className="d-arrow-head"/>
          <path d="M400 85 H435" className="d-arrow"/>
          <polygon points="435,85 425,79 425,91" className="d-arrow-head"/>
        </svg>
      </div>
      <ul style={{textAlign:'left', marginTop:'1rem'}}>
        <li>Use for rent, utilities, and services</li>
        <li>Low fees and fast settlement</li>
        <li>Earn rewards via community programs</li>
      </ul>
      <p style={{marginTop:'1rem'}}><Link to="/tokens">← All tokens</Link></p>
    </div>
  </section>
);

const Tokens = () => {
  return (
    <Routes>
      <Route path="/" element={<TokensHome />} />
      <Route path="hat" element={<Hat />} />
      <Route path="husd" element={<Husd />} />
    </Routes>
  );
};

export default Tokens;
