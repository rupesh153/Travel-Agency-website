function Packages() {
  const tours = [
    {
      title: "Goa Beach Tour",
      days: "3 Days / 2 Nights",
      price: "₹9,999",
      img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    },
    {
      title: "Dubai Luxury Tour",
      days: "5 Days / 4 Nights",
      price: "₹39,999",
      img: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    {
      title: "Maldives Honeymoon",
      days: "4 Days / 3 Nights",
      price: "₹59,999",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    },
  ];

  return (
    <section className="section">
      <div className="section-title">
        <p>Best Offers</p>
        <h2>Travel Packages</h2>
      </div>

      <div className="cards">
        {tours.map((item, index) => (
          <div className="card glass" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.days}</p>
            <h2>{item.price}</h2>
            <button className="primary-btn small-btn">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;