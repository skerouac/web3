import React from "react";
import AuthContextProvider from "../contexts/AuthContext";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <div>
        <p>header</p>
        <Outlet />
        <footer>Footer</footer>
      </div>
    </AuthContextProvider>
  );
};

export default RootLayout;
