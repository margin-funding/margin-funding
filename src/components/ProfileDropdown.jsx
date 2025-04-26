import React, { useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const ProfileDropdown = () => {
  const user = useSelector((state) => state.auth.user);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative z-40" ref={dropdownRef}>
      <button
        className="md:m-0 my-2 md:mx-2 mx-0 flex items-center justify-center rounded-lg w-[50px] h-[45px] relative"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="rounded-full w-[40px] h-[40px] flex justify-center items-center overflow-hidden p-2">
          <CgProfile className="text-white text-[44px]" />
        </div>
        <div
          className={`absolute w-[38px] h-[40px] rounded-full top-[4px] left-[5px] bg-gray-400 opacity-0 transition-opacity duration-300 hover:opacity-30 ${
            isOpen ? "opacity-30" : ""
          }`}
        ></div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[300px] pt-4 pb-2 rounded-lg shadow-lg shadow-gray-100 bg-white border border-gray-100">
          <div className="px-6 flex items-center justify-start pb-4 border-b border-gray-100">
            <div className="w-auto">
              <div className="bg-slate-800 rounded-full w-[50px] h-[50px] flex justify-center items-center  overflow-hidden p-3">
                <CgProfile className="text-white text-[54px]" />
              </div>
            </div>

            <div className=" w-full">
              <div className="flex">
                {/* <h6 className="text-[14px] font-semibold text-gray-700 whitespace-nowrap">
                  John Doe
                </h6> */}
                <p className="bg-green-100 capitalize text-green-600 font-bold px-2 h-[20px] text-[12px] rounded ml-2">
                  User
                </p>
              </div>
              <p className="text-[13px] text-gray-500">
                {user?.userdata?.Username}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
