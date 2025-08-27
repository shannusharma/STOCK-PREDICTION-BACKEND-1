import react from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { date: "Aug 1", price: 120 },
  { date: "Aug 2", price: 125 },
  { date: "Aug 3", price: 123 },
  { date: "Aug 4", price: 130 },
  { date: "Aug 5", price: 128 },
];

export default function StockChart() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-2">Stock Price Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}