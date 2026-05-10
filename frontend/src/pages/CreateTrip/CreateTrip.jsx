import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTrip.css";

const CreateTrip = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    // get old trips
    const oldTrips = JSON.parse(localStorage.getItem("trips")) || [];

    // new trip object
    const newTrip = {
      id: Date.now(),
      name: formData.name,
      startDate: formData.startDate,
      endDate: formData.endDate,
      budget: formData.budget,
      description: formData.description,
    };

    // save
    const updatedTrips = [...oldTrips, newTrip];
    localStorage.setItem("trips", JSON.stringify(updatedTrips));

    // go dashboard
    navigate("/dashboard");
  };

  return (
    <div className="create-trip">

      <div className="trip-form-container">

        <h1>Create New Trip ✈️</h1>
        <p>Plan your dream journey by adding trip details</p>

        <form className="trip-form" onSubmit={handleSave}>

          {/* Trip Name */}
          <div className="form-group">
            <label>Trip Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter trip name"
              onChange={handleChange}
              required
            />
          </div>

          {/* Start Date */}
          <div className="form-group">
            <label>Start Date</label>
            <input
              name="startDate"
              type="date"
              onChange={handleChange}
            />
          </div>

          {/* End Date */}
          <div className="form-group">
            <label>End Date</label>
            <input
              name="endDate"
              type="date"
              onChange={handleChange}
            />
          </div>

          {/* Budget */}
          <div className="form-group">
            <label>Budget</label>
            <input
              name="budget"
              type="number"
              placeholder="Enter budget"
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Write trip description..."
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Button */}
          <button className="save-btn" type="submit">
            Save Trip
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateTrip;