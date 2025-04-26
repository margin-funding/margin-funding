import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { userDataAPI } from "../constants/userDataApi";
import { BsEye, BsEyeSlash, BsClipboard, BsCheckCircle } from "react-icons/bs";

const AccountHistory = () => {
  const [toggle, setToggle] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const [accountDetail, setAccountDetail] = useState(user?.accountdata?.[0]);
  const [showPassword, setShowPassword] = useState(false);
  const [showInvestorPassword, setShowInvestorPassword] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);
  const [investorPasswordCopied, setInvestorPasswordCopied] = useState(false);

  const latestAccountHis =
    accountDetail?.accountHistory?.[accountDetail?.accountHistory?.length - 1];

  useEffect(() => {
    const handleResize = () => {
      setToggle(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const userAPI = async () => {
      const updatedData = await userDataAPI(user?.userdata?.Username);
      setUserDetails(updatedData);
      setAccountDetail(updatedData?.accountdata?.[0]);
    };

    if (user) userAPI();
  }, [user]);

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value || 0);
  };

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleInvestorPasswordVisibility = () => {
    setShowInvestorPassword(!showInvestorPassword);
  };

  // Handle password copy
  const copyPassword = () => {
    if (user?.userdata?.Password) {
      navigator.clipboard.writeText(user.userdata.Password);
      setPasswordCopied(true);
      setTimeout(() => setPasswordCopied(false), 2000);
    }
  };

  const copyInvestorPassword = () => {
    if (accountDetail?.Password) {
      navigator.clipboard.writeText(accountDetail.Password);
      setInvestorPasswordCopied(true);
      setTimeout(() => setInvestorPasswordCopied(false), 2000);
    }
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      <Sidebar toggleSidebar={toggleSidebar} toggle={toggle} />
      <Header
        toggleSidebar={toggleSidebar}
        toggle={toggle}
        user={userDetails}
        accountDetail={accountDetail}
        setAccountDetail={setAccountDetail}
      />
      
      <div className={`${toggle === true ? "lg:ml-[240px]" : ""} p-4 md:p-6 pt-20 transition-all duration-300`}>
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Account History</h1>
        </div>

        {/* Account Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {/* Balance Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white text-xs font-medium">Balance</h3>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-green-600">
                {formatCurrency(latestAccountHis?.Balance)}
              </h2>
            </div>
          </div>

          {/* Equity Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white text-xs font-medium">Equity</h3>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-green-600">
                {formatCurrency(latestAccountHis?.Equity)}
              </h2>
            </div>
          </div>

          {/* Phase Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white text-xs font-medium">Phase</h3>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">
                {latestAccountHis?.Phase || "N/A"}
              </h2>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white text-xs font-medium">Status</h3>
            </div>
            <div className="p-4 text-center">
              <div className="flex items-center justify-center">
                <span className={`inline-block w-2 h-2 rounded-full ${
                  latestAccountHis?.Status === 'Active' ? 'bg-green-500' : 'bg-red-500'
                } mr-1.5`}></span>
                <h2 className="text-lg font-bold text-gray-800">
                  {latestAccountHis?.Status || "N/A"}
                </h2>
              </div>
              <p className="text-xs text-gray-500 mt-1">Lifetime</p>
            </div>
          </div>

          {/* Account Type Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white text-xs font-medium">Account Type</h3>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">
                MarginFunding-{latestAccountHis?.Phase || "N/A"} Phase
              </h2>
            </div>
          </div>

          {/* Total Trades Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-3 py-2 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white text-xs font-medium">Total Trades</h3>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">
                {latestAccountHis?.TotalTrades || 0}
              </h2>
            </div>
          </div>
        </div>

        {/* Account Details Section */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-6">
          <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
            <h3 className="text-white font-medium">Account Login Details</h3>
          </div>
          
          <div className="p-5">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Login Details */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-800">Trading Account</h4>
                  <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">MT4</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Login</label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden">
                      <input 
                        type="text" 
                        className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none" 
                        value={user?.userdata?.Username || ""} 
                        readOnly
                      />
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={() => {
                          if (user?.userdata?.Username) {
                            navigator.clipboard.writeText(user.userdata.Username);
                          }
                        }}
                      >
                        <BsClipboard size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Password</label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none" 
                        value={user?.userdata?.Password || ""} 
                        readOnly
                      />
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <BsEyeSlash size={16} /> : <BsEye size={16} />}
                      </button>
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={copyPassword}
                      >
                        {passwordCopied ? <BsCheckCircle className="text-green-500" size={16} /> : <BsClipboard size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Server Details */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium text-gray-800">Server Details</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">Investor Access</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Server</label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden">
                      <input 
                        type="text" 
                        className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none" 
                        value={accountDetail?.ServerName || ""} 
                        readOnly
                      />
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={() => {
                          if (accountDetail?.ServerName) {
                            navigator.clipboard.writeText(accountDetail.ServerName);
                          }
                        }}
                      >
                        <BsClipboard size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-600 text-xs mb-1">Investor Password</label>
                    <div className="flex items-center bg-white rounded-lg border border-gray-300 overflow-hidden">
                      <input 
                        type={showInvestorPassword ? "text" : "password"} 
                        className="flex-grow px-3 py-2 bg-transparent text-gray-800 focus:outline-none" 
                        value={accountDetail?.Password || ""} 
                        readOnly
                      />
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={toggleInvestorPasswordVisibility}
                      >
                        {showInvestorPassword ? <BsEyeSlash size={16} /> : <BsEye size={16} />}
                      </button>
                      <button 
                        className="px-3 py-2 text-gray-500 hover:text-gray-700"
                        onClick={copyInvestorPassword}
                      >
                        {investorPasswordCopied ? <BsCheckCircle className="text-green-500" size={16} /> : <BsClipboard size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download MT4 Section */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-6">
          <div className="p-5 text-center">
            <h3 className="text-gray-800 font-medium mb-3">Download Trading Platform</h3>
            <p className="text-gray-600 text-sm mb-4">Use your login details to access your trading account</p>
            
            <div className="flex justify-center space-x-4">
              <a 
                href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/mt4setup.exe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Download MetaTrader 4
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center text-gray-500 text-xs mt-8 pb-6">
          <p>&copy; {new Date().getFullYear()} MarginFunding. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
};

export default AccountHistory;