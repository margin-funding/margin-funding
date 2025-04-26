import React, { useState } from "react";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="bg-[#ffffff05] p-4 border border-white/10 rounded-xl">
        <div className="flex flex-nowrap cursor-pointer" onClick={toggleAccordion}>
          <div className="md:text-xl text-sm">
            <strong>{question}</strong>
          </div>

          <div className={``}>
            <div className="">
              <svg
                className={`w-[20px] ${isOpen ? "rotate(120deg)" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.2946 9.00002L6.70461 13.59C6.31461 13.98 6.31461 14.61 6.70461 15C7.09461 15.39 7.72461 15.39 8.11461 15L12.0046 11.12L15.8846 15C16.2746 15.39 16.9046 15.39 17.2946 15C17.6846 14.61 17.6846 13.98 17.2946 13.59L12.7046 9.00002C12.3246 8.61002 11.6846 8.61002 11.2946 9.00002Z"
                  fill="url(#paint0_linear_1_626)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_626"
                    x1="6.41211"
                    y1="5.97307"
                    x2="22.5252"
                    y2="14.4009"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5EBBFF" />
                    <stop offset="1" stopColor="#0066FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div
          className={`block pt-4 faq-grid_item-answer ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
