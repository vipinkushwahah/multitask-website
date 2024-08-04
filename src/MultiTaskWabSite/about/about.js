import React from 'react';
import './about.css';


const About = () => {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__header">
          <img src="/saturo_gojo.jpg" alt="Header" className="about__header-image" />
          <div className="about__title">
            <span className="about__title-highlight">ABOUT</span> US
          </div>
        </div>
        <div className="about__section about__intro">
          <p className="about__fade-in">
            Welcome to
            <span className="about__text-highlight">MultiTaskWebsite</span>, your
            one-stop solution for all your household and commercial service needs.
            We pride ourselves on offering a wide range of professional services
            to help you maintain and enhance your living and working spaces.
          </p>
        </div>
        <div className="about__section about__choose-us">
          <h2 className="about__sub-heading">Why Choose Us?</h2>
          <ul className="about__list">
            <li className="about__list-item about__slide-in">
              <span className='color'>Experienced Professionals:</span > Our team consists of highly trained and
              experienced professionals dedicated to delivering top-notch services.
            </li>
            <li className="about__list-item about__slide-in">
              <span className='color'>Quality Assurance:</span> We use high-quality materials and the latest
              techniques to ensure the best results for every project.
            </li>
            <li className="about__list-item about__slide-in">
              <span className='color'>Customer Satisfaction:</span > Your satisfaction is our priority. We listen to your
              needs and provide customized solutions to meet your specific
              requirements.
            </li>
            <li className="about__list-item about__slide-in">
              <span className='color'>Affordable Pricing:</span > We offer competitive pricing without
              compromising on quality, making our services accessible to everyone.
            </li>
            <li className="about__list-item about__slide-in">
              <span className='color'>24/7 Availability:</span > We understand that emergencies can happen anytime,
              so we are available around the clock to assist you.
            </li>
          </ul>
        </div>
        <div className="about__section about__mission">
          <h2 className="about__mission-heading">Our Mission</h2>
          <p className="about__fade-in">
            Our mission is to simplify your life by providing reliable and
            efficient services that you can trust. We aim to build long-lasting
            relationships with our customers by consistently exceeding their
            expectations.
          </p>
          <h2 className="about__contact-heading">Contact Us</h2>
          <p className="about__fade-in">
            Get in touch with us today to learn more about our services or to
            schedule an appointment. We look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
