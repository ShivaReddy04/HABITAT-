import React from 'react';

const steps = [
  'Form DAO and launch tokens with initial community of 100 founding members',
  'Acquire land and build pilot community with 50 units in partnership with local government',
  'Deploy governance tools and establish community voting protocols',
  'Scale to multiple locations and integrate additional services like healthcare and education',
  'Measure and optimize impact through continuous data collection and community feedback'
];

const Roadmap = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="roadmap-title-xl">Implementation Roadmap</h2>

        <ol className="roadmap-steps">
          {steps.map((text, idx) => (
            <li className="step" key={idx}>
              <div className="step-card">{text}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Roadmap;
