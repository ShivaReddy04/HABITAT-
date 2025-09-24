import React from 'react';

const UDAccessibility = () => {
  return (
    <section className="ud-page ud-accessibility">
      <div className="container">
        <h2 className="solution-title">Accessibility First</h2>
        <p className="solution-subtitle">Beautiful, barrier‑free design integrated from the start.</p>

        <div className="cards" style={{ textAlign:'left' }}>
          <div className="card"><img className="card-thumb" alt="Adaptive" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=200&q=60" /><h3>Adaptive Interiors</h3><p>Flexible layouts, lever handles, and adjustable counters for all users.</p></div>
          <div className="card"><img className="card-thumb" alt="Wayfinding" src="https://images.unsplash.com/photo-1496302662116-35cc4f36df92?auto=format&fit=crop&w=200&q=60" /><h3>Wayfinding</h3><p>Tactile signage, color contrast, and clear paths improve navigation.</p></div>
          <div className="card"><img className="card-thumb" alt="Mobility" src="https://images.unsplash.com/photo-1523419409543-8c4d4bd1b9a5?auto=format&fit=crop&w=200&q=60" /><h3>Mobility Support</h3><p>Ramps, smooth gradients, and elevator access across shared spaces.</p></div>
        </div>

        {/* background image handled via CSS; no extra scrolling */}
      </div>
    </section>
  );
};

export default UDAccessibility;


