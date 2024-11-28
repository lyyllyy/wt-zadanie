import React from 'react';
import ContactForm from './ContactForm';

const MainContent = () => {
  return (
    <section className="main-contact">
      <div className="row nadpis_contact-howto">
        <div className="col-md-auto text-center">
          <div className="heading">
            <h1>Registration</h1>
          </div>
          <p className="text-gray">Any question or remarks? Just write us a message!</p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default MainContent;
