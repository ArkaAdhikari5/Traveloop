import "./Budget.css";

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

const pieData = [
  { name: "Hotels", value: 18000 },
  { name: "Transport", value: 12000 },
  { name: "Food", value: 8000 },
  { name: "Activities", value: 10000 },
];

const barData = [
  { day: "Day 1", cost: 4000 },
  { day: "Day 2", cost: 6500 },
  { day: "Day 3", cost: 5500 },
  { day: "Day 4", cost: 7000 },
  { day: "Day 5", cost: 5000 },
];

const COLORS = ["#38bdf8", "#0ea5e9", "#7dd3fc", "#0284c7"];

const Budget = () => {
  return (
    <>

      <div className="budget-page">

        {/* HEADER */}
        <div className="budget-header">
          <h1>Trip Budget Overview 💰</h1>

          <p>
            Analyze your travel expenses and
            stay within budget.
          </p>
        </div>

        {/* CARDS */}
        <div className="budget-cards">

          <div className="budget-card">
            <h2>₹48,000</h2>
            <p>Total Estimated Cost</p>
          </div>

          <div className="budget-card">
            <h2>₹6,800</h2>
            <p>Average Daily Cost</p>
          </div>

          <div className="budget-card">
            <h2>7 Days</h2>
            <p>Total Trip Duration</p>
          </div>

        </div>

        {/* CHARTS */}
        <div className="charts-container">

          {/* PIE CHART */}
          <div className="chart-box">

            <h2>Expense Breakdown</h2>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>

          {/* BAR CHART */}
          <div className="chart-box">

            <h2>Daily Expenses</h2>

            <ResponsiveContainer width="100%" height={300}>

              <BarChart data={barData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="day" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="cost"
                  fill="#38bdf8"
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
    </>
  );
};

export default Budget;