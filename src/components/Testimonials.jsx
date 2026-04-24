function Testimonials() {
  const reviews = [
    {
      name: "Rohit Sharma",
      text: "Amazing service and premium hotels. Best trip ever!",
    },
    {
      name: "Priya Patil",
      text: "Smooth booking process and friendly support team.",
    },
    {
      name: "Aman Verma",
      text: "Highly recommended for family vacations.",
    },
  ];

  return (
    <section className="section">
      <div className="section-title">
        <p>Client Reviews</p>
        <h2>Testimonials</h2>
      </div>

      <div className="cards">
        {reviews.map((item, index) => (
          <div className="card glass" key={index}>
            <h3>{item.name}</h3>
            <p>{item.text}</p>
            <span>★★★★★</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;