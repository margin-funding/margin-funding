import React, { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { BsCheck2Circle } from "react-icons/bs";

const Header = ({
  onSearch,
  toggleSidebar,
  toggle,
  user,
  accountDetail,
  setAccountDetail,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const dropdownOptions = [
    {
      id: 1,
      label: "Profile",
      link: "/profile",
    },
  ];

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    onSearch(value);
  };

  const handleAccountChange = (selectedAccount) => {
    setAccountDetail(selectedAccount);
    setShowAccountDropdown(false);
  };

  // Format account number for display
  const formatAccountNumber = (accountNo) => {
    if (!accountNo) return "Select Account";
    // Add formatting - example: show last 4 digits with prefix
    return `Account ${accountNo.substring(Math.max(0, accountNo.length - 4))}`;
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 ${
        toggle ? "lg:ml-[240px]" : ""
      } bg-gradient-to-r from-green-800 to-gray-900 border-b border-green-700 z-10 transition-all duration-300`}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left Side - Menu Toggle & Account Selection */}
        <div className="flex items-center space-x-4">
          {/* Hamburger menu */}
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex items-center justify-center w-10 h-10 text-gray-200 hover:text-white focus:outline-none rounded-lg hover:bg-green-700/30 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Account Selector - Styled Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowAccountDropdown(!showAccountDropdown)}
              className="flex items-center space-x-2 bg-green-700/40 hover:bg-green-700/60 text-white px-3 py-2 rounded-lg transition-colors border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <span className="text-sm font-medium">
                {formatAccountNumber(accountDetail?.accountno)}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showAccountDropdown && (
              <div className="absolute left-0 mt-2 w-64 bg-gray-900 border border-green-700 rounded-lg shadow-lg z-50 py-1">
                <div className="px-3 py-2 border-b border-green-800/50">
                  <p className="text-xs font-medium text-green-400">SELECT TRADING ACCOUNT</p>
                </div>
                
                <div className="max-h-60 overflow-y-auto py-1">
                  {user?.accountdata?.map((item, index) => (
                    <button
                      key={index}
                      className={`w-full text-left px-4 py-2.5 hover:bg-green-800/20 flex items-center justify-between ${
                        accountDetail?.accountno === item.accountno
                          ? "bg-green-700/20 text-green-400"
                          : "text-white"
                      }`}
                      onClick={() => handleAccountChange(item)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">Account {index + 1}</span>
                        <span className="text-xs text-gray-400">
                          {item.accountno}
                        </span>
                      </div>
                      
                      {accountDetail?.accountno === item.accountno && (
                        <BsCheck2Circle className="text-green-500" size={18} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - User Welcome & Profile */}
        <div className="flex items-center space-x-4">
          {/* Welcome Message */}
          <div className="hidden md:block text-right">
            <div className="text-green-200 text-xs">Welcome Back</div>
            <div className="text-white font-medium text-sm">{user?.userdata?.Username || "Trader"}</div>
          </div>
          
          {/* Profile Dropdown */}
          <div className="h-10 w-10">
            <ProfileDropdown options={dropdownOptions} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;