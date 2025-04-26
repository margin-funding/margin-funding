import React from "react";
import {
  BsBoxArrowRight,
  BsChat,
  BsGear,
  BsGraphUp,
  BsSearch,
  BsPieChart,
  BsQuestionCircle
} from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";

const Sidebar = ({ toggleSidebar, toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  
  const sidebarItems = [
    { icon: <BsGraphUp size={18} />, text: "Dashboard", link: "/dashboard" },
    { icon: <BsSearch size={18} />, text: "Account History", link: "/account-history" },
    // { icon: <BsChat size={18} />, text: "Profit Share", link: "/profit-share" },
    // { icon: <BsPieChart size={18} />, text: "Analytics", link: "/analytics" },
    // { icon: <BsQuestionCircle size={18} />, text: "Support", link: "/support" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const handleLogout = () => {
    // Add a confirmation if desired
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(setUser({}));
      navigate("/login");
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full ${
        toggle ? "" : "hidden"
      } w-60 bg-gradient-to-b from-green-800 to-green-900 z-50 transition-all duration-300 shadow-xl`}
      style={{
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Logo Area */}
      <div className="flex items-center justify-between p-4 border-b border-green-700">
        <div className="flex items-center">
          <span className="text-white font-bold text-lg">MarginFunding</span>
        </div>
        
        <button
          type="button"
          onClick={toggleSidebar}
          className="lg:hidden text-green-200 hover:text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Navigation */}
      <div className="py-6">
        <div className="px-5 mb-3">
          <span className="text-xs font-medium text-green-200 uppercase tracking-wider">Main Menu</span>
        </div>
        
        <nav>
          <ul className="space-y-2 px-3">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                    isActive(item.link)
                      ? "bg-green-700 text-white font-medium shadow-md"
                      : "text-green-100 hover:bg-green-700/40 hover:text-white"
                  }`}
                >
                  <span className={`${isActive(item.link) ? "text-white" : "text-green-200"} transition-colors`}>
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                  
                  {isActive(item.link) && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-white shadow-glow"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Account Section */}
        <div className="mt-10 px-5">
          <div className="mb-3">
            <span className="text-xs font-medium text-green-200 uppercase tracking-wider">Account</span>
          </div>
          
          <div className="space-y-2 px-3">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 py-3 px-4 rounded-xl text-green-100 hover:bg-red-800/40 hover:text-red-200 transition-all duration-200 text-left"
            >
              <BsBoxArrowRight size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-5 left-0 right-0 px-4">
        <div className="bg-green-700/50 backdrop-blur-sm rounded-xl p-4 border border-green-600/30 shadow-lg">
          <div className="text-xs text-green-200 mb-1.5">Trading Account</div>
          <div className="flex items-center">
            <span className="inline-flex w-2.5 h-2.5 rounded-full bg-green-400 mr-2 animate-pulse shadow-glow"></span>
            <span className="text-sm font-medium text-white">Active</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
