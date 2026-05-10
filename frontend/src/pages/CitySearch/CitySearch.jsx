import "./CitySearch.css";

const CitySearch = () => {
  return (
    <>

      <div className="city-page">

        {/* HEADER */}
        <div className="city-header">
          <h1>Discover Cities 🌍</h1>

          <p>
            Search destinations and add them
            to your travel plan.
          </p>
        </div>

        {/* SEARCH */}

        <div className="city-search-box">

          <input
            type="text"
            placeholder="Search cities..."
          />

          <select>
            <option>All Regions</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>America</option>
          </select>

        </div>

        {/* CITY CARDS */}

        <div className="city-container">

          {/* CARD 1 */}
          <div className="city-card">

            <img
              src="https://images.unsplash.com/photo-1534430480872-3498386e7856"
              alt="Tokyo"
            />

            <div className="city-content">
              <h2>Tokyo</h2>

              <p>Japan • High Popularity</p>

              <span>Avg Budget: ₹35,000</span>

              <button>Add to Trip</button>
            </div>

          </div>

          {/* CARD 2 */}
          <div className="city-card">

            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Paris"
            />

            <div className="city-content">
              <h2>Paris</h2>

              <p>France • Premium Destination</p>

              <span>Avg Budget: ₹60,000</span>

              <button>Add to Trip</button>
            </div>

          </div>

          {/* CARD 3 */}
          <div className="city-card">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Bali"
            />

            <div className="city-content">
              <h2>Bali</h2>

              <p>Indonesia • Budget Friendly</p>

              <span>Avg Budget: ₹25,000</span>

              <button>Add to Trip</button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default CitySearch;