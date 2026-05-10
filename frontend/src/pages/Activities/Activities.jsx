import "./Activities.css";

const Activities = () => {
  return (
    <>

      <div className="activities-page">

        {/* HEADER */}
        <div className="activities-header">

          <h1>Explore Activities 🎯</h1>

          <p>
            Discover exciting things to do
            during your journey.
          </p>

        </div>

        {/* SEARCH + FILTER */}

        <div className="search-section">

          <input
            type="text"
            placeholder="Search activities..."
          />

          <select>
            <option>All Categories</option>
            <option>Adventure</option>
            <option>Food</option>
            <option>Sightseeing</option>
            <option>Nightlife</option>
          </select>

        </div>

        {/* ACTIVITY CARDS */}

        <div className="activity-container">

          {/* CARD 1 */}
          <div className="activity-card">

            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="activity"
            />

            <div className="activity-content">

              <h2>Mountain Hiking</h2>

              <p>
                Enjoy breathtaking mountain
                views and adventure trekking.
              </p>

              <span>₹2,500 • 5 Hours</span>

              <button>
                Add Activity
              </button>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="activity-card">

            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="activity"
            />

            <div className="activity-content">

              <h2>Food Tour</h2>

              <p>
                Explore famous local dishes
                and cultural food experiences.
              </p>

              <span>₹1,200 • 3 Hours</span>

              <button>
                Add Activity
              </button>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="activity-card">

            <img
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              alt="activity"
            />

            <div className="activity-content">

              <h2>Beach Party</h2>

              <p>
                Experience nightlife, music,
                and beach entertainment.
              </p>

              <span>₹3,000 • Night</span>

              <button>
                Add Activity
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Activities;