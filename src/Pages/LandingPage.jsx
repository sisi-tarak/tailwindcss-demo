import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const LandingPage = ({ change }) => {
  return (
    <div>
      <Navbar change={change} />
      <Footer />
    </div>
  );
};

export default LandingPage;
