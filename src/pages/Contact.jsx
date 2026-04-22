function Contact() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <section className="section">
      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Us</h2>
      </div>

      <form className="contact-form glass" onSubmit={submitForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Phone Number" required />
        <textarea rows="5" placeholder="Write Message" required></textarea>
        <button className="primary-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;