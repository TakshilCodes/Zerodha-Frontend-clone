import React from "react";
import supportdata from "./supportdata";

export default function TicketSelection() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl mb-6 paracolor">
        To create a ticket, select a relevant topic
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30">
        {supportdata.topics.map((topic, index) => (
          <div key={index} className="">
            <div className="flex items-center space-x-2 text-gray-800 text-lg mb-2">
              <topic.icon className="text-gray-800" />
              <span>{topic.title}</span>
            </div>
            <ul className="space-y-1 text-blue-600 text-sm">
              {topic.items.map((item, idx) => (
                <li key={idx} className="hover:text-black cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}