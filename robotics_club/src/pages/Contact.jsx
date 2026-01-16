import React from 'react';

// Main contact interface for the Robotics Club organization.
const Contact = () => {
  return (
    <main className="contact-page">
      <h1 className="main-heading">Get In Touch</h1>
      <p className="paragraph">
        Have questions about our club? Want to join or collaborate? We would appreciate the opportunity to connect with you.
      </p>

      <div className="contact-box">
        <div className="left-side">
          <h2>Contact Information</h2>

          <div className="info">
            <i className="fa-solid fa-location-dot icon addr"></i>
            <div className="text">
              <h4>Address</h4>
              <p>
                Incubation Center, 3rd Floor <br />
                National Institute of Technology, Patna <br />
                Ashok Rajpath, 800005
              </p>
            </div>
          </div>

          <div className="info">
            <i className="fa-regular fa-envelope icon email"></i>
            <div className="text">
              <h4>Email</h4>
              <a href="mailto:roboticsclub@nitp.ac.in">roboticsclub@nitp.ac.in</a>
            </div>
          </div>

          <div className="info">
            <i className="fa-solid fa-phone icon phone"></i>
            <div className="text">
              <h4>Phone</h4>
              <p>+91 9876543210</p>
              <p>+91 9123456789</p>
            </div>
          </div>

          <div className="info">
            <i className="fa-regular fa-clock icon time"></i>
            <div className="text">
              <h4>Lab Hours</h4>
              <p>
                Monday-Friday: 9:00 AM - 8:00 PM <br />
                Saturday: 10:00 AM - 6:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <hr />

          <div className="follow">
            <h4>Follow Us</h4>
            <div className="socials">
              <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="Name">Full Name *</label>
                <input type="text" id="Name" placeholder="Abhinav Anand" required />
              </div>

              <div className="form-group">
                <label htmlFor="Email">Email Address *</label>
                <input type="email" id="Email" placeholder="anandabhinav@gmail.com" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select name="subject" id="subject" defaultValue="default">
                <option value="default" disabled>Select a Subject</option>
                <option value="Membership Enquiry">Membership Enquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Workshop Registration">Workshop Registration</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" placeholder="Please describe your inquiry..." required></textarea>
            </div>

            <button type="submit">
              Send Message
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      <h1 className="main-heading">Find Us</h1>
      <p className="paragraph">Visit our laboratory to explore the field of robotics first-hand.</p>

      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.581520608561!2d85.1691236150193!3d25.618037983701633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5853f0a5f78b%3A0x74e3025218d6e355!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NIT Patna Location Map"
          ></iframe>
        </div>
      </section>

      <h1 className="main-heading">Quick Answers</h1>
      <div className="faq-section">
        <div className="question">
          <h4>How can I join the Robotics Club?</h4>
          <p>
            Recruitment drives are conducted at the commencement of each semester. Please monitor our social media 
            channels for official announcements or contact us via email to express interest.
          </p>
        </div>

        <div className="question">
          <h4>Is prior experience in robotics a prerequisite?</h4>
          <p>
            Prior experience is not mandatory. We encourage applications from all academic backgrounds and provide 
            comprehensive training sessions for beginners.
          </p>
        </div>

        <div className="question">
          <h4>Are the laboratory facilities accessible to all?</h4>
          <p>
            Active members are granted access during designated operating hours. Completion of mandatory safety 
            training is required before utilizing technical equipment.
          </p>
        </div>

        <div className="question">
          <h4>How can corporate entities initiate a collaboration?</h4>
          <p>
            We welcome industry partnerships. Please reach out via email to discuss potential sponsorships, 
            joint ventures, or guest lecture opportunities.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact
