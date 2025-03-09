import React from "react";

const PricingTable = ({ data }) => {
  return (
    <div className="md:w-full max-w-6xl md:mx-auto bg-white shadow-md overflow-hidden text-[13px]">
      {/* Table Header */}
      <div className="flex bg-gray-50">
        {data.headers.map((header, index) => (
          <div
            key={index}
            className="flex-1 p-4 text-left font-semibold text-gray-700 border-b border-gray-200"
          >
            {header}
          </div>
        ))}
      </div>

      {/* Table Body */}
      <div>
        {data.rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`flex ${rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className="flex-1 p-4 text-gray-700 border-b border-gray-200"
              >
                {Array.isArray(cell) ? (
                  <ul className="list-disc pl-5">
                    {cell.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  cell
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
