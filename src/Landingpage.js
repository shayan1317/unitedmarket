import React from "react";
import HeaderComp from "./components/Header/HeaderComp";
import Banner from "./components/Banner/Banner";
import Properties from "./components/Properties/Properties";
import PlatformAnalysis from "./components/PlatformAnalysis/PlatformAnalysis";
import Features from "./components/Features/Features";
import GetNotified from "./components/Getnotified/GetNotified";
import Footer from "./components/Footer/Footer";
import Customers from "./components/Customers/Customers";
function Landingpage() {
  return (
    <div>
      <HeaderComp />
      <div className="App">
        <Banner />
        <Properties />
        <PlatformAnalysis />
        <Features />
        <Customers />
        <GetNotified />

        <Footer />
      </div>
    </div>
  );
}

export default Landingpage;
