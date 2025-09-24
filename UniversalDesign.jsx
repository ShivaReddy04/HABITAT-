import React from 'react';
import { Link } from 'react-router-dom';

const UniversalDesign = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="solution-title">Universal Design Housing</h2>
        <p className="solution-subtitle">Inclusive, accessible communities for people of all abilities and incomes.</p>

        <div className="cards" style={{ textAlign: 'left' }}>
          <Link to="/solution/universal-design/accessibility" className="card">
            <h3>Accessibility First</h3>
            <p>Ramps, wider doorways, tactile signage, and adaptable interiors built into every plan.</p>
          </Link>
          <Link to="/solution/universal-design/mixed-income" className="card">
            <h3>Mixed-Income Communities</h3>
            <p>Diverse housing options that keep neighborhoods integrated, affordable, and vibrant.</p>
          </Link>
          <Link to="/solution/universal-design/walkable" className="card">
            <h3>Walkable Design</h3>
            <p>15‑minute neighborhoods with essentials reachable by foot or wheelchair.</p>
          </Link>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <img alt="Universal design community" style={{ width:'100%', borderRadius:12 }}
               src="https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80" />
        </div>
      </div>
    </section>
  );
};

export default UniversalDesign;


