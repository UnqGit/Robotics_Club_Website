import React from 'react'

const Contact = () => {
  return (
    <main className="contact-page">
      <h1 className="main-heading">Get In Touch</h1>
      <p className="paragraph">Have question about our club? Want to join or collaborate? We'd love to hear from you!</p>
      
      <div className="contact-box">
        <div className="left-side">
          <h2>Contact Information</h2>
          
          <div className="info">
            <i className="fa-solid fa-location-dot icon addr"></i>
            <div className="text">
              <h4>Address</h4>
              <p>
                Incubation Center 3rd floor <br />
                National Institute of Patna <br />
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
              <p>+91 9876543210</p>
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
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h2>Send Us a Message</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="Name">Full Name *</label>
              <input type="text" id="Name" placeholder="Abhinav Anand" required />
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email Address *</label>
              <input type="text" id="Email" placeholder="anandabhinav@gmail.com" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select name="subject" id="subject">
              <option value="select a subject">Select a Subject</option>
              <option value="Membership Enquiry">Membership Enquiry</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Workshop Registration">Workshop Registration</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div className="form-group" style={{ marginTop: '20px' }}>
            <label htmlFor="message">Message *</label>
            <textarea id="message" placeholder="Tell us about your inquiry..."></textarea>
          </div>

          <button>
            Send Message
            <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>

      <h1 className="main-heading">Find Us</h1>
      <p className="paragraph">Visit our lab and explore the world of robotics</p>

      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5287420924706!2d85.16860527517818!3d25.62057137744088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dd1e40680f%3A0x52309559c05c5426!2sIncubation%20Center%2C%20NITP!5e0!3m2!1sen!2sin!4v1768141449332!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="NIT Patna Location"
          ></iframe>
        </div>
      </section>
      
      <h1 className="main-heading">Quick Answers</h1>
      <div className="faq-section">
        
        <div className="question">
          <h4>How can I join the Robotics Club?</h4>
          <p>We hold recruitment drives at the beginning of each semester. Follow us on social media for announcements, or send us an email to express your interest.</p>
        </div>

        <div className="question">
          <h4>Do I need prior experience in robotics?</h4>
          <p>No prior experience is required! We welcome students from all backgrounds and provide training sessions for beginners.</p>
        </div>

        <div className="question">
          <h4>Can I use the lab facilities?</h4>
          <p>Active club members have access to our lab during operating hours. Safety training is mandatory before using equipment.</p>
        </div>

        <div className="question">
          <h4>How can companies collaborate with us?</h4>
          <p>We welcome industry partnerships! Contact us via email to discuss sponsorships, joint projects, or guest lectures.</p>
        </div>
      </div>
    </main>
  )
}

export default Contact