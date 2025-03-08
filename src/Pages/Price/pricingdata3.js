const commodityPricingData = {
    headers: ["", "Commodity Futures", "Commodity Options"],
    rows: [
      ["Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "₹20/executed order"],
      ["STT/CTT", "0.01% on sell side (Non-Agri)", "0.05% on sell side"],
      ["Transaction Charges", 
        ["MCX: 0.0021%", "NSE: 0.0001%"], 
        ["MCX: 0.0418%", "NSE: 0.001%"]
      ],
      ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
      ["SEBI Charges", 
        ["Agri:", "₹1 / crore", "Non-agri:", "₹10 / crore"], 
        "₹10 / crore"
      ],
      ["Stamp Charges", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]
    ]
  };
  
  export default commodityPricingData;
  