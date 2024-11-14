import React from 'react';
import ScrollEffect from '../utils/scrollEffect';

const featuresData = [
  { iconClass: 'fas fa-hard-hat', title: 'Professional Team', description: 'It is a long established fact that reader by the readable content of a page when looking at its layout.' },
  { iconClass: 'fas fa-phone-alt', title: '24/7 Support', description: 'It is a long established fact that reader by the readable content of a page when looking at its layout.' },
  { iconClass: 'fas fa-money-bill-wave', title: 'Affordable Price', description: 'It is a long established fact that reader by the readable content of a page when looking at its layout.' },
  { iconClass: 'fas fa-wrench', title: 'Construction', description: 'It is a long established fact that reader by the readable content of a page when looking at its layout.' },
  { iconClass: 'fas fa-building', title: 'Building', description: 'It is a long established fact that reader by the readable content of a page when looking at its layout.' },
  { iconClass: 'fas fa-ruler-combined', title: 'Engineering', description: 'It is a long established fact that reader by the readable content of a page when looking at its layout.' },
];

const ContactUs = () => {
  return (
    <section className="sk-features-section" id="contact-us">
    <ScrollEffect />

      <h2>Introducing Our Features</h2>
      <p className="sk-features-intro">
        We understand the importance of innovation and professionalism and work with the best people to achieve this.
      </p>

      <div className="sk-features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="sk-feature-card">
            <div className="sk-feature-icon">
              <i className={feature.iconClass}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>


      <div className="sk-contactus-container">
      <div className="sk-contactus-left">
        <h5>CONTACT US</h5>
        <h1>Have a cool project? Get in touch!</h1>
        <div className="sk-contactus-info">
          <p>
            <strong>Address:</strong> 123 Main St, Cityville, Country
          </p>
          <p>
            <strong>Contact Number:</strong> +123 456 7890
          </p>
          <p>
            <strong>Email:</strong> contact@yourcompany.com
          </p>
        </div>
      </div>
      <div className="sk-contactus-right">
        <form>
          <div className="sk-contactus-form-group">
            <i className="fas fa-user sk-contactus-icon"></i>
            <input type="text" className="sk-contactus-form-control" placeholder="Name" />
          </div>
          <div className="sk-contactus-form-group">
            <i className="fas fa-phone sk-contactus-icon"></i>
            <input type="tel" className="sk-contactus-form-control" placeholder="Phone" />
          </div>
          <div className="sk-contactus-form-group">
            <i className="fas fa-envelope sk-contactus-icon"></i>
            <input
              type="email"
              className="sk-contactus-form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="sk-contactus-form-group">
            <i className="fas fa-tag sk-contactus-icon"></i>
            <input type="text" className="sk-contactus-form-control" placeholder="Subject" />
          </div>
          <div className="sk-contactus-form-group">
            <i className="fas fa-pencil-alt sk-contactus-icon"></i>
            <textarea
              className="sk-contactus-form-control"
              placeholder="How can we help you? Feel free to get in touch!"
            ></textarea>
          </div>
          <div className="sk-contactus-checkbox">
            <input type="checkbox" id="agreement" />
            <label htmlFor="agreement">
              I agree that my submitted data is <a href="#">collected and stored</a>.
            </label>
          </div>
          <button type="submit" className="btn sk-contactus-submit-btn">
            Get In Touch
          </button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;
