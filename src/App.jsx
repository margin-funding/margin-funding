import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AccountHistory from "./pages/AccountHistory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Login from "./pages/Login"
const App = () => {
  const { userdata } = useSelector((state) => state.auth.user);

  return (
    <React.Fragment>
      <Routes>
        <Route 
          path="*" 
          element={<Navigate replace to="/" />} 
        />
        <Route
          exact
          path="/"
          element={!userdata ? <Login /> : <Navigate replace to="/dashboard" />}
        />
        <Route
          exact
          path="/login"
          element={!userdata ? <Login /> : <Navigate replace to="/dashboard" />}
        />
        <Route
          exact
          path="/dashboard"
          element={userdata ? <Dashboard /> : <Navigate replace to="/login" />}
        />
        <Route
          exact
          path="/account-history"
          element={
            userdata ? <AccountHistory /> : <Navigate replace to="/login" />
          }
        />
      </Routes>
      <ToastContainer position="bottom-right" />
    </React.Fragment>
  );
};

export default App;