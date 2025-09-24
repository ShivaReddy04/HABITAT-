import React from 'react';

const UDWalkableDesign = () => {
  return (
    <section className="ud-page ud-walkable">
      <div className="container">
        <h2 className="solution-title">Walkable Design</h2>
        <p className="solution-subtitle">15‑minute neighborhoods that prioritize mobility, safety, and health.</p>

        <div className="cards" style={{ textAlign:'left' }}>
          <div className="card"><img className="card-thumb" alt="Safe" src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=200&q=60" /><h3>Safe Streets</h3><p>Traffic‑calmed roads, lighting, and crossings for pedestrians and wheelchairs.</p></div>
          <div className="card"><img className="card-thumb" alt="Green" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=200&q=60" /><h3>Green Corridors</h3><p>Parks and tree‑lined paths that connect homes to services and transit.</p></div>
          <div className="card"><img className="card-thumb" alt="Proximity" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=200&q=60" /><h3>Essential Proximity</h3><p>Groceries, clinics, and schools within a short, accessible journey.</p></div>
        </div>

        {/* background image handled via CSS; no extra scrolling */}
      </div>
    </section>
  );
};

export default UDWalkableDesign;


