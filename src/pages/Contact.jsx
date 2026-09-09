import { useState } from "react";
import "../styles/contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

  };


  return (

    <div className="contact-page">

      {/* Hero Section */}

      <section className="contact-hero">

        <h1>Contact Us</h1>

        <p>
          Have questions about your order or products?
          Our team is here to help you.
        </p>

      </section>


      {/* Main Contact Section */}

      <section className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            We would love to hear from you.
            Contact our support team for any help.
          </p>


          <div className="info-card">

            <span>📍</span>

            <div>
              <h3>Address</h3>
              <p>Jaipur, Rajasthan, India</p>
            </div>

          </div>


          <div className="info-card">

            <span>📞</span>

            <div>
              <h3>Phone</h3>
              <p>+91 9521051315</p>
            </div>

          </div>


          <div className="info-card">

            <span>📧</span>

            <div>
              <h3>Email</h3>
              <p>support@mystore.com</p>
            </div>

          </div>


          <div className="info-card">

            <span>⏰</span>

            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>

          </div>

        </div>


        {/* Contact Form */}

        <div className="contact-form-box">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Phone</label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Message</label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>


            <button
              type="submit"
              className="contact-submit-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </div>

  );

}

export default Contact;