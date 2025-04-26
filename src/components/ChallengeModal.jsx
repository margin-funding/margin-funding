// src/components/Modal.js
import React from "react";
import CountdownTimer from "./CountdownTimer";
import { Link } from "react-scroll";

const ChallengeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const targetDate = "2024-05-31T00:00:00";

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      <div className="hero-image-wrap">
        <div className="hero-decoration-line-top"></div>
        <div className="hero-decoration-line-center"></div>

        <div className="bg-transparent modal-bg hero-image-right-wrap rounded-lg shadow-lg p-6 z-50 max-w-md mx-auto relative">
          <div className="absolute top-4 right-6 left-auto">
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-gray-500"
            >
              &times;
            </button>
          </div>

          <div class="text-center bg-opacity-70 rounded-lg shadow-lg">
            <img
              src="/logo.png"
              alt="GRY Funding Logo"
              class="mx-auto mb-4 w-[130px]"
            />
            <div className="relative mb-7">
              <h1 class="text-6xl font-bold text-shadow text-white">17.5%</h1>
              <h1 class="text-[80px] font-bold text-white/20 absolute top-6 left-0 right-0">
                OFF
              </h1>
            </div>

            <p class="text-5xl font-bold text-shadow text-white">100% refund</p>
            <p className="mt-[-10px] text-sm">upon challenge pass</p>
            <p class="text-lg mb-4 text-white">
              Use code: <span class="font-semibold">GRYWELCOME</span>
            </p>

            <img
              src="/down-arrow.png"
              alt="down arrow"
              class="mx-auto mb-4 w-[50px]"
            />

            <div class="mt-2">
              <a
                href="https://gryfunding.com"
                class="bg-white btn-shadow text-black font-bold py-3 px-6 rounded-2xl hover:bg-gray-200 transition duration-300"
              >
                Get Funded Now!
              </a>
            </div>
            <p className="text-sm mt-6">
              Start today at
              <span>
                <Link to="https://gryfunding.com" className="text-white ps-1 font-semibold">
                  gryfunding.com
                </Link>
              </span>
            </p>
          </div>
        </div>

        <div className="hero-decoration-line-bottom bottom-0"></div>
      </div>
    </div>
  );
};

export default ChallengeModal;
