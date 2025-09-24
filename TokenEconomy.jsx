import React from 'react';

const TokenEconomy = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Dual‑Token Crypto Economy</h2>
        <p className="solution-subtitle">Fractional ownership and day‑to‑day stability through a dual‑token model.</p>

        <div className="cards" style={{ textAlign: 'left' }}>
          <div className="card">
            <h3>HAT (Habitat Asset Token)</h3>
            <p>Represents fractional ownership in real assets with potential appreciation.</p>
          </div>
          <div className="card">
            <h3>HUSD (Habitat Stablecoin)</h3>
            <p>Stable medium for everyday transactions in the community economy.</p>
          </div>
          <div className="card">
            <h3>Incentives & Rewards</h3>
            <p>Earn tokens for community service, conservation actions, and participation.</p>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <img alt="Token economy graphic"
               style={{ width:'100%', borderRadius:12 }}
               src="https://images.unsplash.com/photo-1621416894569-0f39d2b1b2f8?auto=format&fit=crop&w=1600&q=80" />
        </div>
      </div>
    </section>
  );
};

export default TokenEconomy;





