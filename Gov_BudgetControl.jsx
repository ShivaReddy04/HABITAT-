import React from 'react';

const GovBudgetControl = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Budget Control</h2>
        <p className="solution-subtitle">Collaborative budgeting with live visibility and controls.</p>

        <div className="cards" style={{ textAlign:'left' }}>
          <div className="card"><h3>Participatory Budgeting</h3><p>Members submit, discuss, and vote on allocations to priority projects.</p></div>
          <div className="card"><h3>Spending Controls</h3><p>Milestone‑based disbursements with multi‑sig approvals and alerts.</p></div>
          <div className="card"><h3>Financial Reports</h3><p>Clear statements, forecasts, and variance tracking.</p></div>
        </div>

        <div style={{marginTop:'1.5rem'}}>
          <img alt="Budget control"
               style={{width:'100%', borderRadius:12}}
               src="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1600&q=80" />
        </div>
      </div>
    </section>
  );
};

export default GovBudgetControl;



