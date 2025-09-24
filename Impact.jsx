import React from 'react';

const Impact = () => {
  const metrics = [
    { value: '500+', label: 'Housing Units Planned' },
    { value: '85%', label: 'Expected DAO Participation' },
    { value: '$50M', label: 'Initial Funding Target' },
    { value: '3', label: 'Cities in Phase 1' }
  ];
  return (
    <section className="impact">
      <div className="container">
        <h2 className="impact-title">Impact That Matters</h2>
        <p className="impact-subtitle">We will track outcomes such as housing units built, DAO participation, and service adoption.</p>
        <div className="impact-grid">
          {metrics.map((m) => (
            <div className="impact-card" key={m.label}>
              <div className="impact-value">{m.value}</div>
              <div className="impact-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Impact;