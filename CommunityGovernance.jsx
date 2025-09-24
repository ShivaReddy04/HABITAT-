import React from 'react';

function CommunityGovernance() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Community DAO Governance</h2>
        <p className="solution-subtitle">Transparent, resident-led decision making using on-chain voting tools.</p>

        <div className="cards" style={{ textAlign: 'left' }}>
          <div className="card">
            <h3>Transparent Voting</h3>
            <p>Every proposal and vote recorded on-chain for auditability and trust.</p>
          </div>
          <div className="card">
            <h3>Budget Control</h3>
            <p>Allocate community funds collectively with real-time visibility.</p>
          </div>
          <div className="card">
            <h3>Service Management</h3>
            <p>Oversee maintenance, safety, and programs through accountable processes.</p>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <img
            alt="Community governance"
            style={{ width: '100%', borderRadius: 12 }}
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
          />
        </div>
      </div>
    </section>
  );
}

export default CommunityGovernance;


