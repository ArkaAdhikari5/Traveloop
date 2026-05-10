import "./Trip.css";
import { useParams } from "react-router-dom";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// ======================
// TRIP DATA
// ======================
const tripData = {
  goa: {
    itinerary: [
      { place: "Beach Walk", day: "Day 1" },
      { place: "Water Sports", day: "Day 2" },
    ],
    packing: ["Sunscreen", "Shorts", "Sunglasses"],
    budget: {
      total: 25000,
      breakdown: [
        { name: "Hotel", value: 10000 },
        { name: "Food", value: 5000 },
        { name: "Travel", value: 6000 },
        { name: "Activities", value: 4000 },
      ],
      daily: [
        { day: "Day 1", cost: 4000 },
        { day: "Day 2", cost: 6000 },
        { day: "Day 3", cost: 7000 },
        { day: "Day 4", cost: 8000 },
      ],
    },
  },

  darjeeling: {
    itinerary: [
      { place: "Tiger Hill", day: "Day 1" },
      { place: "Tea Garden", day: "Day 2" },
    ],
    packing: ["Jacket", "Shoes", "Thermal Wear"],
    budget: {
      total: 18000,
      breakdown: [
        { name: "Hotel", value: 7000 },
        { name: "Food", value: 3000 },
        { name: "Travel", value: 5000 },
        { name: "Activities", value: 3000 },
      ],
      daily: [
        { day: "Day 1", cost: 3000 },
        { day: "Day 2", cost: 4000 },
        { day: "Day 3", cost: 5000 },
        { day: "Day 4", cost: 6000 },
      ],
    },
  },
};

const COLORS = ["#38bdf8", "#0ea5e9", "#7dd3fc", "#0284c7"];

const Trip = () => {
  const { tripName } = useParams();
  const data = tripData[tripName?.toLowerCase()] || tripData.goa;

  return (
    <div className="trip-page">

      {/* HEADER */}
      <div className="trip-header">
        <h1>{tripName.toUpperCase()} Trip 🌍</h1>
        <p>Your complete travel plan</p>
      </div>

      {/* ================= ITINERARY ================= */}
      <div className="box">
        <h2>📍 Itinerary</h2>

        {data.itinerary.map((item, i) => (
          <p key={i}>
            {item.day} → {item.place}
          </p>
        ))}
      </div>

      {/* ================= BUDGET (UPGRADED) ================= */}
      <div className="box">
        <h2>💰 Budget Overview</h2>

        <h3>Total: ₹{data.budget.total}</h3>

        <div className="charts-container">

          {/* PIE CHART */}
          <div className="chart-box">
            <h3>Expense Breakdown</h3>

            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data.budget.breakdown}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {data.budget.breakdown.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* BAR CHART */}
          <div className="chart-box">
            <h3>Daily Spending</h3>

            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data.budget.daily}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cost" fill="#38bdf8" />
              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>
      </div>

      {/* ================= PACKING ================= */}
      <div className="box">
        <h2>🎒 Packing List</h2>

        {data.packing.map((item, i) => (
          <p key={i}>✔ {item}</p>
        ))}
      </div>

    </div>
  );
};

export default Trip;