import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      {/* Left Side */}
      <div className="hero-left">

        <h1>
          Plan Your Dream Journey With
          <span> Traveloop ✈️</span>
        </h1>

        <p>
          Create personalized travel itineraries,
          manage budgets, discover destinations,
          and organize unforgettable adventures
          all in one place.
        </p>

        <div className="hero-buttons">
          <button className="start-btn">
            Get Started
          </button>

          <button className="learn-btn">
            Learn More
          </button>
        </div>

      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="travel"
        />
      </div>

    </section>
  );
};

export default Hero;