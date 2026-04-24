import HeroSlider from "../components/HeroSlider";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="section-title">
          <p>Best Destinations</p>
          <h2>Why Choose TravelGo?</h2>
        </div>

        <div className="cards">
          <div className="card glass">
            <h3>Luxury Hotels</h3>
            <p>Stay in premium hotels with world-class comfort.</p>
          </div>

          <div className="card glass">
            <h3>Affordable Packages</h3>
            <p>Get best prices for domestic and international tours.</p>
          </div>

          <div className="card glass">
            <h3>24/7 Support</h3>
            <p>We help you before, during and after your journey.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="section">
        <div className="cta-box glass">
          <h2>Ready For Your Dream Vacation?</h2>
          <p>Book today and enjoy unforgettable travel experiences.</p>
          <button className="primary-btn">Enquire Now</button>
        </div>
      </section>
    </>
  );
}

export default Home;
