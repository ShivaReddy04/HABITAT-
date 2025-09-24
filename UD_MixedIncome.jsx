import React from 'react';

const UDMixedIncome = () => {
  return (
    <section className="ud-page ud-mixed">
      <div className="container">
        <h2 className="solution-title">Mixed Income</h2>
        <p className="solution-subtitle">Diverse housing options that keep neighborhoods integrated and vibrant.</p>

        <div className="cards" style={{ textAlign:'left' }}>
          <div className="card"><img className="card-thumb" alt="Units" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=200&q=60" /><h3>Diverse Unit Types</h3><p>Studios to family homes placed together with shared amenities.</p></div>
          <div className="card"><img className="card-thumb" alt="Affordability" src="https://images.unsplash.com/photo-1542621334-0bf4b8cf9b6b?auto=format&fit=crop&w=200&q=60" /><h3>Affordability Bands</h3><p>Clear tiers and fair allocation processes that prevent displacement.</p></div>
          <div className="card"><img className="card-thumb" alt="Services" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=200&q=60" /><h3>Community Services</h3><p>Onsite childcare, clinics, and training that lift all residents.</p></div>
        </div>

        {/* background image handled via CSS; no extra scrolling */}
      </div>
    </section>
  );
};

export default UDMixedIncome;


