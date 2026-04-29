import { useState } from "react";

function BookNow() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitBooking = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.destination ||
      !form.travelers ||
      !form.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Booking Submitted Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      destination: "",
      travelers: "",
      date: "",
      message: "",
    });
  };

  return (
    <section className="section">
      <div className="section-title">
        <p>Reserve Your Tour</p>
        <h2>Book Now</h2>
      </div>

      <form className="contact-form glass" onSubmit={submitBooking}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />

        <select
          name="destination"
          value={form.destination}
          onChange={handleChange}
        >
          <option value="">Select Destination</option>
          <option>Goa</option>
          <option>Dubai</option>
          <option>Maldives</option>
          <option>Paris</option>
          <option>Bali</option>
        </select>

        <input
          type="number"
          name="travelers"
          placeholder="No. of Travelers"
          value={form.travelers}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Special Request"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button className="primary-btn">Confirm Booking</button>
      </form>
    </section>
  );
}

export default BookNow;