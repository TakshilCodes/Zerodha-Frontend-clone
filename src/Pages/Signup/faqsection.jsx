import { useState } from "react";
import FAQdata from "./FAQdata";

const Faqsection = () => {
  const [selected, setSelected] = useState(null);

  function handleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="flex flex-col items-center bg-white p-6 my-30">

      <h1 className="text-3xl font-medium  mb-6">FAQs</h1>


      <div className="md:w-[60%]">
        {FAQdata && FAQdata.length > 0 ? (
          FAQdata.map((dataItem) => (
            <div
              key={dataItem.id}
              className="border-b border-gray-300 last:border-none"
            >
              {/* Hover Group for Animation */}
              <div
                onClick={() => handleClick(dataItem.id)}
                className="group cursor-pointer p-4 flex flex-col justify-between transition duration-200"
              >
                {/* Blue Line Above the Question */}
                <div className="relative w-full">
                  <div className="absolute -top-2 left-0 h-1 bg-blue-500 w-15 transition-all duration-300 group-hover:w-30"></div>
                </div>

                <div className="flex flex-row justify-between">
                  <h3 className="text-lg font-medium">{dataItem.question}</h3>

                  <span className="text-xl transition duration-200">
                    {selected === dataItem.id ? "-" : "+"}
                  </span>
                </div>
              </div>

              {/* Answer Section */}
              {selected === dataItem.id && (
                <div className="p-4 transition duration-300">
                  {dataItem.answer}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No data found</div>
        )}
      </div>
    </div>
  );
};

export default Faqsection;
