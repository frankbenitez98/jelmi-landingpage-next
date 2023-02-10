import React from "react";
import Footer from "../UI/Footer";
import NavBar from "../UI/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
