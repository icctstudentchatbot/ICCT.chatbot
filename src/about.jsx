import React from "react";
import "./index.css";

const About = () => {
  return (
    <div className="about-page">

      <section className="about-overlay">

        <h1>About Us</h1>

        <p>
          This system is a web-based AI chatbot designed to help students with
          their questions, concerns, and academic inquiries. It provides fast
          responses, automated assistance, and intelligent support using NLP.
        </p>

        <p>
          Our goal is to improve communication between students and the institution
          by providing an easy-to-use platform that manages student concerns
          efficiently and accurately.
        </p>

        <p>
          This project focuses on student support, concern classification, and
          response management to create a better digital experience.
        </p>

      </section>

      {/* CONTACT SECTION */}
      <div className="top-bar">

        <div className="contact-item">
          <div className="icon-circle">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="text">
            ICCT Building, V.V. Soliven Ave. II, Cainta, Rizal, Philippines 1900
          </div>
        </div>

        <div className="contact-item">
          <div className="icon-circle">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="text">info@icct.edu.ph</div>
        </div>

        <div className="contact-item">
          <div className="icon-circle">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="text">(02) 7001 4228</div>
        </div>

        <div className="contact-item">
          <div className="icon-circle">
            <i className="fa-solid fa-mobile-screen"></i>
          </div>
          <div className="text">
            0947 895 4228 (SMART)<br />
            0932 872 4228 (SMART)<br />
            0917 814 2228 (GLOBE)
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;