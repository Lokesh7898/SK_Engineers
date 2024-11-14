import React, { useEffect } from 'react';
import aboutImg from '../assets/images/about-us-img.png';
import ScrollEffect from '../utils/scrollEffect';

const AboutUs = () => {
  useEffect(() => {
    const rings = document.querySelectorAll('.circle-ring');
    rings.forEach((ring) => {
      const percentage = ring.getAttribute('data-percentage');
      ring.style.setProperty('--progress', `${percentage}%`);
    });
  }, []);

  return (
    <section className="sk-about-hero-section" id="about-us">
    <ScrollEffect />
      <div className="container sk-about-hero-container">
        <div
          className="sk-about-hero-image"
          style={{ backgroundImage: `url(${aboutImg})` }}
        />
        <div className="sk-about-hero-text">
          <h2>Providing All Kinds of Construction Services</h2>
          <p>
            Our construction company has been founded 10 years ago, at the very peak of the building frenzy in the US...
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form...
          </p>
          <button className="btn-outline-dark">View Portfolio</button>
        </div>
      </div>

      <div className="sk-about-skills-section">
        <div className="sk-about-skill-item">
          <div className="circle-ring" data-percentage="39">
            <span className="sk-about-skill-percentage">39%</span>
          </div>
          <span className="sk-about-skill-label">Physical</span>
        </div>
        <div className="sk-about-skill-item">
          <div className="circle-ring" data-percentage="45">
            <span className="sk-about-skill-percentage">45%</span>
          </div>
          <span className="sk-about-skill-label">Technology</span>
        </div>
        <div className="sk-about-skill-item">
          <div className="circle-ring" data-percentage="40">
            <span className="sk-about-skill-percentage">40%</span>
          </div>
          <span className="sk-about-skill-label">Management</span>
        </div>
        <div className="sk-about-skill-item">
          <div className="circle-ring" data-percentage="55">
            <span className="sk-about-skill-percentage">55%</span>
          </div>
          <span className="sk-about-skill-label">Design</span>
        </div>
        <div className="sk-about-skill-item">
          <div className="circle-ring" data-percentage="45">
            <span className="sk-about-skill-percentage">45%</span>
          </div>
          <span className="sk-about-skill-label">Planning</span>
        </div>
        <div className="sk-about-skill-item">
          <div className="circle-ring" data-percentage="37">
            <span className="sk-about-skill-percentage">37%</span>
          </div>
          <span className="sk-about-skill-label">Regulations</span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
