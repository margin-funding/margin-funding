import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import BalanceChart from "../components/BalanceChart";
import { useSelector } from "react-redux";
import { userDataAPI } from "../constants/userDataApi";

const Dashboard = () => {
  const [toggle, setToggle] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const [userDetails, setUserDetails] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [accountDetail, setAccountDetail] = useState(user?.accountdata?.[0]);
  const latestAccountHis =
    accountDetail?.accountHistory?.[accountDetail?.accountHistory?.length - 1];

  // current values
  const currentProfitTarget = latestAccountHis?.Equity || 0;
  const currentOverallLoss = (accountDetail?.InitialDeposit || 0) - (latestAccountHis?.Equity || 0);
  const currentDailyLoss = (accountDetail?.startingEquity || 0) - (latestAccountHis?.Equity || 0);

  // total values
  const totalProfitTarget =
    (accountDetail?.InitialDeposit || 0) +
    ((latestAccountHis?.ProfitTarget || 0) * (accountDetail?.InitialDeposit || 0) / 100);

  const totalOverallLoss =
    ((latestAccountHis?.MaxTotalDrawdown || 0) * (accountDetail?.InitialDeposit || 0)) / 100;

  const totalDailyLoss =
    ((latestAccountHis?.MaxDailyDrawdown || 0) * (latestAccountHis?.Equity || 0)) / 100;

  // UPDATED: Use balance for high watermark and calculate 4% for permitted loss
  const currentBalance = parseFloat(latestAccountHis?.Balance || 0);
  const permittedLossPercentage = 4; // 4%
  const permittedLoss = (currentBalance * permittedLossPercentage) / 100;
  const equityLowerLimit = currentBalance - permittedLoss;

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

    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [user]);

  function calculateTimeRemaining() {
    const now = new Date();
    const next2AM = new Date(now);
    next2AM.setHours(2, 0, 0, 0);

    if (now > next2AM) {
      // If it's past 2 AM, set the next 2 AM to the next day
      next2AM.setDate(next2AM.getDate() + 1);
    }
    const timeDiff = next2AM - now;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return { hours, minutes, seconds };
  }

  // Calculate percentages safely
  const profitTargetPer = totalProfitTarget > 0 
    ? Math.min(100, Math.max(0, (currentProfitTarget / totalProfitTarget) * 100)) 
    : 0;

  const overallLossPer = totalOverallLoss > 0 
    ? Math.min(100, Math.max(0, (currentOverallLoss / totalOverallLoss) * 100)) 
    : 0;

  const dailyLossPer = totalDailyLoss > 0 
    ? Math.min(100, Math.max(0, (currentDailyLoss / totalDailyLoss) * 100)) 
    : 0;

  // Helper function to format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(value || 0);
  };

  return (
    <main className="bg-white min-h-screen text-gray-800">
      <Sidebar toggleSidebar={toggleSidebar} toggle={toggle} />
      <Header
        toggleSidebar={toggleSidebar}
        toggle={toggle}
        accountDetail={accountDetail}
        setAccountDetail={setAccountDetail}
        user={userDetails}
      />
      
      <div className={`${toggle === true ? "lg:ml-[240px]" : ""}  p-4 md:p-6 transition-all duration-300`}>
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Dashboard</h1>
        </div>

        {/* Card Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Time Until Reset Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white font-medium text-sm">Daily Drawdown Resets In</h3>
            </div>
            <div className="p-4 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {`${timeRemaining.hours.toString().padStart(2, "0")}:${timeRemaining.minutes
                    .toString().padStart(2, "0")}:${timeRemaining.seconds
                    .toString().padStart(2, "0")}`}
                </h2>
                <p className="text-gray-500 text-xs mt-1">Hours : Minutes : Seconds</p>
              </div>
            </div>
          </div>

          {/* Current Balance Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white font-medium text-sm">Current Balance</h3>
            </div>
            <div className="p-4 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {formatCurrency(latestAccountHis?.Balance)}
              </h2>
            </div>
          </div>

          {/* Current Equity Card */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white font-medium text-sm">Current Equity</h3>
            </div>
            <div className="p-4 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                {formatCurrency(latestAccountHis?.Equity)}
              </h2>
            </div>
          </div>
        </div>

        {/* Chart and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
            <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
              <h3 className="text-white font-medium">Account Balance History</h3>
            </div>
            <div className="p-4">
              <BalanceChart accountDetail={accountDetail} />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            {/* Today's Starting High Watermark - UPDATED */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
                <h3 className="text-white font-medium text-sm">Today's Starting High Watermark</h3>
              </div>
              <div className="p-4 flex items-center justify-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {formatCurrency(currentBalance)}
                </h2>
              </div>
            </div>

            {/* Today's Permitted Loss - UPDATED */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
                <h3 className="text-white font-medium text-sm">Today's Permitted Loss</h3>
              </div>
              <div className="p-4 flex items-center justify-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {formatCurrency(permittedLoss)}
                </h2>
              </div>
            </div>

            {/* Today's Equity Lower Limit - UPDATED */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
                <h3 className="text-white font-medium text-sm">Today's Equity Cannot Go Below</h3>
              </div>
              <div className="p-4 flex items-center justify-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {formatCurrency(equityLowerLimit)}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg mb-6">
          <div className="px-4 py-3 bg-gradient-to-r from-green-600 to-green-800">
            <h3 className="text-white font-medium">Trading Objectives</h3>
          </div>
          <div className="p-6 space-y-8">
            {/* Profit Target */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Profit Target</span>
                <span className="text-gray-700">
                  {formatCurrency(Math.max(0, currentProfitTarget))} / {formatCurrency(totalProfitTarget)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-1 overflow-hidden">
                <div 
                  className="bg-green-500 h-3 rounded-full" 
                  style={{ width: `${profitTargetPer}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{profitTargetPer.toFixed(1)}% complete</span>
                <span>{(100 - profitTargetPer).toFixed(1)}% remaining</span>
              </div>
            </div>

            {/* Overall Loss */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Overall Loss</span>
                <span className="text-gray-700">
                  {formatCurrency(Math.max(0, currentOverallLoss))} / {formatCurrency(totalOverallLoss)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-1 overflow-hidden">
                <div 
                  className={`h-3 rounded-full ${overallLossPer > 80 ? 'bg-red-500' : 'bg-yellow-500'}`}
                  style={{ width: `${overallLossPer}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{overallLossPer.toFixed(1)}% used</span>
                <span>{(100 - overallLossPer).toFixed(1)}% available</span>
              </div>
            </div>

            {/* Daily Loss */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Daily Loss</span>
                <span className="text-gray-700">
                  {formatCurrency(Math.max(0, currentDailyLoss))} / {formatCurrency(totalDailyLoss)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-1 overflow-hidden">
                <div 
                  className={`h-3 rounded-full ${dailyLossPer > 80 ? 'bg-red-500' : 'bg-yellow-500'}`}
                  style={{ width: `${dailyLossPer}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{dailyLossPer.toFixed(1)}% used</span>
                <span>{(100 - dailyLossPer).toFixed(1)}% available</span>
              </div>
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

export default Dashboard;
