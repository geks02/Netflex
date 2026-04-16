import React from "react";
import Nav from "./compnent/Nav";
import "./App.css";
import Trends from "./compnent/Trends";
import Reason from "./compnent/Reason";
import Questions from "./compnent/Questions";
import Subscription from "./compnent/Subscription";
import Footer from "./compnent/Footer";

const App = () => {
  return (
    <div className=" min-h-screen min-w-screen bg-black text-white">
      <Nav />
      <Trends />
      <Reason />
      <Questions />
      <Subscription />
      <Footer />
    </div>
  );
};

export default App;
