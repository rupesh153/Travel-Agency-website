import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer glass">
      <div className="footer-container">

        <div className="footer-box">
          <h2>TravelGo</h2>
          <p>
            Explore the world with premium travel
            packages, luxury stays and unforgettable
            adventures.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-box">
          <h3>Contact Info</h3>
          <p>Pune, Maharashtra</p>
          <p>+91 98765 43210</p>
          <p>travelgo@email.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 TravelGo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;