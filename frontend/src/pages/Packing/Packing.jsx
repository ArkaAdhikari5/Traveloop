import "./Packing.css";

const Packing = () => {
  return (
    <>

      <div className="packing-page">

        {/* HEADER */}
        <div className="packing-header">

          <h1>Packing Checklist 🎒</h1>

          <p>
            Keep track of everything you need
            for your journey.
          </p>

        </div>

        {/* INPUT */}

        <div className="packing-input">

          <input
            type="text"
            placeholder="Add new item..."
          />

          <button>Add Item</button>

        </div>

        {/* CHECKLIST */}

        <div className="checklist-container">

          {/* ITEM */}
          <div className="check-item">

            <div>
              <input type="checkbox" />

              <span>Passport</span>
            </div>

            <button>Delete</button>

          </div>

          {/* ITEM */}
          <div className="check-item">

            <div>
              <input type="checkbox" />

              <span>Travel Tickets</span>
            </div>

            <button>Delete</button>

          </div>

          {/* ITEM */}
          <div className="check-item">

            <div>
              <input type="checkbox" />

              <span>Phone Charger</span>
            </div>

            <button>Delete</button>

          </div>

          {/* ITEM */}
          <div className="check-item">

            <div>
              <input type="checkbox" />

              <span>Clothes</span>
            </div>

            <button>Delete</button>

          </div>

        </div>

      </div>
    </>
  );
};

export default Packing;