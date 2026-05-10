import "./CreateTrip.css";


const CreateTrip = () => {
  return (
    <>

      <div className="create-trip">

        <div className="trip-form-container">

          <h1>Create New Trip ✈️</h1>
          <p>
            Plan your dream journey by adding
            trip details, budget, and destinations.
          </p>

          <form className="trip-form">

            {/* Trip Name */}
            <div className="form-group">
              <label>Trip Name</label>

              <input
                type="text"
                placeholder="Enter trip name"
              />
            </div>

            {/* Start Date */}
            <div className="form-group">
              <label>Start Date</label>

              <input type="date" />
            </div>

            {/* End Date */}
            <div className="form-group">
              <label>End Date</label>

              <input type="date" />
            </div>

            {/* Budget */}
            <div className="form-group">
              <label>Budget</label>

              <input
                type="number"
                placeholder="Enter budget"
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label>Description</label>

              <textarea
                rows="5"
                placeholder="Write trip description..."
              ></textarea>
            </div>

            {/* Cover Photo */}
            <div className="form-group">
              <label>Upload Cover Photo</label>

              <input type="file" />
            </div>

            {/* Button */}
            <button className="save-btn">
              Save Trip
            </button>

          </form>

        </div>

      </div>
    </>
  );
};

export default CreateTrip;