const pricingData2 = {
  headers: ["", "Equity Delivery", "Equity Intraday", "F&O - Futures", "F&O - Options"],
  rows: [
    ["Brokerage", "Zero Brokerage", "0.03% or Rs. 20/executed order whichever is lower", "0.03% or Rs. 20/executed order whichever is lower", "Flat Rs. 20 per executed order"],
    ["STT/CTT", "0.1% on buy & sell", "0.025% on the sell side", "0.02% on the sell side", [
      "0.125% of the intrinsic value on options that are bought and exercised",
      "0.1% on sell side (on premium)"
    ]],
    ["Transaction Charges", "NSE: 0.00297%, BSE: 0.00375%", "NSE: 0.00297%, BSE: 0.00375%", "NSE: 0.00173%, BSE: 0%", "NSE: 0.03503% (on premium), BSE: 0.0325% (on premium)"],
    ["GST", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)", "18% on (brokerage + SEBI charges + transaction charges)"],
    ["SEBI Charges", "₹10 / crore", "₹10 / crore", "₹10 / crore", "₹10 / crore"],
    ["Stamp Charges", "0.015% or ₹1500 / crore on buy side", "0.003% or ₹300 / crore on buy side", "0.002% or ₹200 / crore on buy side", "0.003% or ₹300 / crore on buy side"]
  ]
};

export default pricingData2;
