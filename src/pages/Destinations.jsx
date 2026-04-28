import { useState } from "react";
import SearchBar from "../components/SearchBar";
function Destinations() {
  const places = [
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    },
    {
      name: "Dubai",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    },
    {
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
      name: "Goa",
      img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    },
    {
      name: "Bali",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    },
    {
      name: "Thailand",
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526",
    },
  ];

  const [filtered, setFiltered] = useState(places);

  return (
    <section className="section">
      <div className="section-title">
        <p>Search Places</p>
        <h2>Top Destinations</h2>
      </div>

          <SearchBar data={places} setFiltered={setFiltered} />

      <div className="cards">
        {filtered.map((item, index) => (
          <div className="card glass" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <button className="secondary-btn small-btn">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;