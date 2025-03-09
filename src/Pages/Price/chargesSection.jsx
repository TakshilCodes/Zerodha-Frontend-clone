import React from "react";

const ChargesSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800">
      {/* Main Heading */}
      <h1 className="text-2xl mb-6">Charges explained</h1>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
        {/* Left Column */}
        <div className="space-y-6">
          <Section
            title="Securities/Commodities transaction tax"
            content="Tax by the government when transacting on the exchanges. Charged on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or F&O."
            extra="When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab."
          />

          <Section
            title="Transaction/Turnover Charges"
            content="Charged by exchanges (NSE, BSE, MCX) on the value of your transactions."
            extra="BSE has revised transaction charges for different groups, including non-exclusive scrips and turnover value changes."
          />

          <Section
            title="Call & trade"
            content="Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square-off orders."
          />

          <Section
            title="Stamp charges"
            content="Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for issuing instruments on stock exchanges and depositories."
          />

          <Section
            title="NRI brokerage charges"
            content={
              <ul className="list-disc pl-5">
                <li>₹100 per order for futures and options.</li>
                <li>For an NRE account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
              </ul>
            }
          />

          <Section
            title="Charges for Investor’s Protection Fund Trust (IPFT) by NSE"
            content={
              <ul className="list-disc pl-5">
                <li>Equity & Futures - ₹10 per crore + GST of the traded value.</li>
                <li>Options - ₹50 per crore + GST of the traded premium value.</li>
              </ul>
            }
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <Section
            title="GST"
            content="Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)."
          />

          <Section
            title="SEBI Charges"
            content="Charged at ₹10 per crore by Securities and Exchange Board of India for regulating the markets."
          />

          <Section
            title="DP (Depository participant) charges"
            content="₹13.5 per scrip (₹13.5 CDSL + ₹5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity."
          />

          <Section
            title="Pledging charges"
            content="₹30 + GST per pledge request per ISIN."
          />

          <Section
            title="AMC (Account maintenance charges)"
            content="For BSDA demat accounts, zero charges if the holding value is less than ₹40,000. For non-BSDA demat accounts, ₹300/year + 18% GST charged quarterly (₹90/quarter)."
          />

          <Section
            title="Corporate action order charges"
            content="₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Zerodha."
          />

          <Section
            title="Delayed Payment Charges"
            content="Interest charged at 18% per annum or 0.05% per day on the debit balance in your trading account."
          />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-10">
        <h2 className="text-md mb-3">Disclaimer</h2>
        <p className="text-gray-700 text-sm">
            For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be 
            charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and 
            regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments 
            are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as 
            delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions 
            in physically settled contracts, a brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, content, extra }) => (
  <div>
    <h2 className="mb-5 text-lg">{title}</h2>
    <p className="text-gray-700 text-sm paracolor my-5">{content}</p>
    {extra && <p className="text-gray-700 mt-2">{extra}</p>}
  </div>
);

export default ChargesSection;
