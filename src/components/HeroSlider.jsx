import { useEffect, useState } from "react";

function HeroSlider() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Discover Tropical Paradise",
      text: "Luxury beach holidays and crystal-clear waters.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      title: "Explore Modern Cities",
      text: "Skyline adventures, shopping and nightlife.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      title: "Romantic European Escapes",
      text: "Create unforgettable memories abroad.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-slider"
      style={{
        backgroundImage: `url(${slides[index].image})`,
      }}
    >
      <div className="hero-dark"></div>

      <div className="hero-content glass">
        <p className="hero-tag">Premium Travel Agency</p>
        <h1>{slides[index].title}</h1>
        <p>{slides[index].text}</p>

        <div className="hero-btns">
          <button className="primary-btn">Book Now</button>
          <button className="secondary-btn">Explore More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;