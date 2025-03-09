import { useState, useEffect } from "react";
import pricingData from "./pricingdata";
import pricingData2 from "./pricingdata2";
import commodityPricingData from "./pricingdata3";
import PricingTable from "../../components/pricingtable";

const PricingSection = () => {

  const [displayContent, setDisplayContent] = useState(
    localStorage.getItem("selectedTab") || "equity"
  );

  useEffect(() => {
    localStorage.setItem("selectedTab", displayContent);
  }, [displayContent]);

  const pricingTables = {
    equity: <PricingTable data={pricingData} />,
    currency: <PricingTable data={pricingData2} />,
    commodity: <PricingTable data={commodityPricingData} />,
  };

  return (
    <div className="mt-20">

      <div className="flex md:space-x-6 mb-6 md:w-250 md:mx-auto border-b border-zinc-300">
        <button
          onClick={() => setDisplayContent("equity")}
          className={`px-8 py-4 md:text-2xl font-medium cursor-pointer ${
            displayContent === "equity"
              ? "border-b-2 border-blue-600 text-black"
              : "text-blue-500 hover:text-black"
          }`}
        >
          Equity
        </button>
        <button
          onClick={() => setDisplayContent("currency")}
          className={`px-8 py-4 md:text-2xl font-medium cursor-pointer ${
            displayContent === "currency"
              ? "border-b-2 border-blue-600 text-black"
              : "text-blue-500 hover:text-black"
          }`}
        >
          Currency
        </button>
        <button
          onClick={() => setDisplayContent("commodity")}
          className={`md:px-8 md:py-4 md:text-2xl font-medium cursor-pointer ${
            displayContent === "commodity"
              ? "border-b-2 border-blue-600 text-black"
              : "text-blue-500 hover:text-black"
          }`}
        >
          Commodity
        </button>
      </div>

      <div className="max-w-5xl md:mx-auto">{pricingTables[displayContent]}</div>

      <p className="md:text-xl text-center my-10">
        <a href="#" className="text-blue-600">
          Calculate your costs upfront 
        </a> using our brokerage calculator
      </p>
    </div>
  );
};

export default PricingSection;
