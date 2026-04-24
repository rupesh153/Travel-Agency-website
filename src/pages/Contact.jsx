import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validation Function
  const validateForm = () => {
    let newErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone Validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit Form
  const submitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

      setErrors({});
    }
  };

  return (
    <section className="section">
      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Us</h2>
      </div>

      <form className="contact-form glass" onSubmit={submitForm}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        {/* Message */}
        <textarea
          rows="5"
          name="message"
          placeholder="Write Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button className="primary-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;