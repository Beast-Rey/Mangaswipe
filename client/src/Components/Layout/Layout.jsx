import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer'
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  let location = useLocation()
  if (location.pathname === "/404") {
    return (
      <>
        <main>{children}</main>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    );
  }
};

export default Layout;
