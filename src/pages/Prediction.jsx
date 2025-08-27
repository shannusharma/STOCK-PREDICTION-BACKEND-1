import React, { useState } from "react";

export default function Prediction() {
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState("");

  const handlePredict = () => {
    if (symbol.toUpperCase() === "AAPL") setResult("📈 Bullish");
    else if (symbol.toUpperCase() === "TSLA") setResult("📉 Bearish");
    else setResult("⚖️ Neutral");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Prediction</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter stock symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handlePredict}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Predict
        </button>
      </div>
      {result && (
        <p className="mt-4 text-xl font-semibold">{result}</p>
      )}
    </div>
  );
}