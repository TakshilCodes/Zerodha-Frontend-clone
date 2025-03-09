import {FaPlus, FaUser, FaMoneyBillWave, FaChartLine, FaClipboardList, FaCoins } from "react-icons/fa";

const supportdata = {
  headlinks: [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
  ],
  topics: [
    {
      icon: FaPlus,
      title: "Account Opening",
      items: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      icon: FaUser,
      title: "Your Zerodha Account",
      items: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      icon: FaChartLine,
      title: "Kite",
      items: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      icon: FaMoneyBillWave,
      title: "Funds",
      items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      icon: FaClipboardList,
      title: "Console",
      items: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      icon: FaCoins,
      title: "Coin",
      items: [
        "Understanding mutual funds and Coin",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)",
      ],
    },
  ],
};

export default supportdata;
