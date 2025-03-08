const currencyPricingData = {
    headers: ["", "Currency Futures", "Currency Options"],
    rows: [
      ["Brokerage", "0.03% or ₹20/executed order whichever is lower", "₹20/executed order"],
      ["STT/CTT", "No STT", "No STT"],
      ["Transaction Charges", 
        ["NSE: 0.00035%", "BSE: 0.00045%"], 
        ["NSE: 0.0311%", "BSE: 0.001%"]
      ],
      ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
      ["SEBI Charges", "₹10 / crore", "₹10 / crore"],
      ["Stamp Charges", "0.0001% or ₹10 / crore on buy side", "0.0001% or ₹10 / crore on buy side"]
    ]
  };
  
  export default currencyPricingData;
  