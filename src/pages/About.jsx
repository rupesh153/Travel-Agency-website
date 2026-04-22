function About() {
  return (
    <section className="section">
      <div className="section-title">
        <p>About Company</p>
        <h2>Who We Are</h2>
      </div>

      <div className="about-grid">
        <div className="glass about-box">
          <img
            src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
            alt="About"
          />
        </div>

        <div className="glass about-box text-left">
          <h3>Trusted Travel Experts</h3>
          <p>
            TravelGo is a modern travel agency helping thousands of travelers
            enjoy premium vacations with easy booking and luxury comfort.
          </p>

          <p>
            We specialize in beach tours, honeymoon trips, family vacations,
            international travel, adventure tours and business travel.
          </p>

          <div className="stats">
            <div>
              <h4>10K+</h4>
              <p>Happy Clients</p>
            </div>

            <div>
              <h4>250+</h4>
              <p>Destinations</p>
            </div>

            <div>
              <h4>8+</h4>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;