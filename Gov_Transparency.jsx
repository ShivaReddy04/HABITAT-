import React from 'react';

const GovTransparency = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Transparency</h2>
        <p className="solution-subtitle">Open data, auditable proposals, and clear reporting.</p>

        <div className="cards" style={{ textAlign:'left' }}>
          <div className="card"><h3>Open Proposals</h3><p>All proposals are published with rationale, budget, and expected outcomes.</p></div>
          <div className="card"><h3>Audit Trails</h3><p>Immutable records of voting and execution provide a complete audit trail.</p></div>
          <div className="card"><h3>Public Dashboards</h3><p>KPIs and spending dashboards keep stakeholders informed in real time.</p></div>
        </div>

        <div style={{marginTop:'1.5rem'}}>
          <img alt="Transparency dashboard"
               style={{width:'100%', borderRadius:12}}
               src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80" />
        </div>
      </div>
    </section>
  );
};

export default GovTransparency;



