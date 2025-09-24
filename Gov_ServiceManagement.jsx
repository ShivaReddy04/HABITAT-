import React from 'react';

const GovServiceManagement = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Service Management</h2>
        <p className="solution-subtitle">Plan, prioritize, and monitor services to meet community needs.</p>

        <div className="cards" style={{ textAlign:'left' }}>
          <div className="card"><h3>Requests & SLAs</h3><p>Track requests with clear service levels and escalation paths.</p></div>
          <div className="card"><h3>Operations Board</h3><p>Kanban views for maintenance, safety, and community programs.</p></div>
          <div className="card"><h3>Outcome Reviews</h3><p>Assess results and feedback to continuously improve services.</p></div>
        </div>

        <div style={{marginTop:'1.5rem'}}>
          <img alt="Service management"
               style={{width:'100%', borderRadius:12}}
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80" />
        </div>
      </div>
    </section>
  );
};

export default GovServiceManagement;



