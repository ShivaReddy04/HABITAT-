import React from 'react';

const Explore = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Explore Nature</h2>
        <p>
          Nature sustains life. Forests, rivers, and wetlands provide clean air and water,
          regulate climate, and support biodiversity that keeps ecosystems resilient.
        </p>
        <div className="cards" style={{marginTop: '1.5rem'}}>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" alt="River" style={{width:'100%', borderRadius:'10px', marginBottom:'0.75rem'}} />
            <h3>Rivers</h3>
            <p>
              Rivers are the lifelines of communities—supplying drinking water, supporting agriculture,
              and nourishing habitats for countless species.
            </p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" alt="Forest at sunset" style={{width:'100%', borderRadius:'10px', marginBottom:'0.75rem'}} />
            <h3>Forests</h3>
            <p>
              Forests absorb carbon, protect soil, and provide vital resources for people and wildlife.
              Conserving and restoring forests strengthens community well‑being.
            </p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb" alt="Wetlands" style={{width:'100%', borderRadius:'10px', marginBottom:'0.75rem'}} />
            <h3>Our Responsibility</h3>
            <p>
              Protecting the environment means safeguarding our future. Education, conservation, and
              sustainable choices help communities thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
